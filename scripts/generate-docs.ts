import { createRequire } from 'node:module'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { markdownTable } from 'markdown-table'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const require = createRequire(join(ROOT, 'package.json'))
const raw = require('confetti')
const confetti: ConfettiPackage = raw['module.exports'] ?? raw
const DOCS_DIR = join(ROOT, 'api')

const CHANGELOG_URL =
  'https://raw.githubusercontent.com/confetti/confetti-node/master/CHANGELOG.md'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FilterValue {
  label: string
  description?: string
  type: string
  key: string
  value: string
}

interface Filter {
  type: string
  label: string
  default: string | string[]
  required?: boolean
  values?: FilterValue[]
}

interface ReadAttribute {
  key: string
  type: string
  description?: string
}

interface CreateAttribute {
  key: string
  label: string
  type: string
  required?: boolean
  values?: string[]
  description?: string
  helpText?: string
  itemType?: string
  children?: CreateAttribute[]
}

interface SampleSet {
  formatted: Record<string, unknown>
  raw: Record<string, unknown>
}

interface Model {
  key: string
  endpoint: string
  path: string
  name: string
  sample: { single: SampleSet; multiple: SampleSet }
  filters?: Record<string, Filter>
  includes?: string[]
  operations?: {
    read?: { attributes: ReadAttribute[] }
    create?: { attributes: CreateAttribute[] }
    update?: { attributes: CreateAttribute[] }
  }
}

interface ConfettiPackage {
  models: Record<string, Model>
}

type Op = 'list' | 'get' | 'create' | 'update'

interface ResourceConfig {
  key: string
  dir?: string
  ops: Op[]
}

interface CodeTab {
  label: string
  lang: string
  code: string
}

// ---------------------------------------------------------------------------
// Markdown builder
// ---------------------------------------------------------------------------

class MdBuilder {
  private parts: string[] = []

  frontmatter(data: Record<string, unknown>): this {
    const lines = Object.entries(data).map(([k, v]) => `${k}: ${v}`)
    this.parts.push(['---', ...lines, '---'].join('\n'))
    return this
  }

  heading(level: number, text: string): this {
    this.parts.push('#'.repeat(level) + ' ' + text)
    return this
  }

  paragraph(text: string): this {
    this.parts.push(text)
    return this
  }

  component(tag: string, attrs: Record<string, string>): this {
    const pairs = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`)
    this.parts.push(`<${tag} ${pairs.join(' ')} />`)
    return this
  }

  table(headers: string[], rows: string[][]): this {
    if (rows.length > 0) {
      this.parts.push(markdownTable([headers, ...rows]))
    }
    return this
  }

  blockquote(text: string): this {
    this.parts.push(text.split('\n').map((l) => `> ${l}`).join('\n'))
    return this
  }

  codeGroup(tabs: CodeTab[]): this {
    const fence = '```'
    const blocks = tabs
      .map((t) => `${fence}${t.lang} [${t.label}]\n${t.code}\n${fence}`)
      .join('\n\n')
    this.parts.push(`::: code-group\n\n${blocks}\n\n:::`)
    return this
  }

  codeBlock(lang: string, code: string): this {
    this.parts.push('```' + lang + '\n' + code + '\n```')
    return this
  }

  build(): string {
    return this.parts.join('\n\n') + '\n'
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const json = (obj: unknown): string => JSON.stringify(obj, null, 2)

const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1)

const escapeCell = (s: unknown): string =>
  String(s ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const pluralize = (name: string): string => {
  if (/(s|x|z|ch|sh)$/i.test(name)) return `${name}es`
  if (/[^aeiou]y$/i.test(name)) return `${name.slice(0, -1)}ies`
  return `${name}s`
}

// ---------------------------------------------------------------------------
// TypeScript interface builder
// ---------------------------------------------------------------------------

const ATTR_TYPE_MAP: Record<string, string> = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  date: 'Date',
  object: 'Record<string, unknown>',
  array: 'unknown[]',
  enum: 'string',
}

function buildTsInterface(name: string, attrs: ReadAttribute[]): string {
  const fields = attrs
    .map((a) => `  ${a.key}: ${ATTR_TYPE_MAP[a.type] ?? 'unknown'}`)
    .join('\n')
  return `interface ${name} {\n${fields}\n}`
}

// ---------------------------------------------------------------------------
// Example values (shared across JS and cURL output)
// ---------------------------------------------------------------------------

const KNOWN_EXAMPLES: Record<string, { js: string; raw: unknown }> = {
  firstName: { js: "'Jane'", raw: 'Jane' },
  lastName: { js: "'Doe'", raw: 'Doe' },
  email: { js: "'jane@example.com'", raw: 'jane@example.com' },
  phone: { js: "'+46701234567'", raw: '+46701234567' },
  comment: { js: "'A note'", raw: 'A note' },
  company: { js: "'Acme Inc'", raw: 'Acme Inc' },
  url: { js: "'https://example.com/webhook'", raw: 'https://example.com/webhook' },
  type: { js: "'ticket.attending'", raw: 'ticket.attending' },
  provider: { js: "'zapier'", raw: 'zapier' },
  status: { js: "'active'", raw: 'active' },
}

function exampleFilterValue(filter: Filter): { js: string; raw: string } {
  if (filter.values?.length) {
    const first = filter.values[0]
    const v = String(typeof first === 'object' ? first.value : first)
    return { js: `'${v}'`, raw: v }
  }
  if (filter.type === 'number') return { js: '1', raw: '1' }
  if (filter.type === 'boolean') return { js: 'true', raw: 'true' }
  return { js: "'example'", raw: 'example' }
}

function exampleAttrValue(attr: CreateAttribute): { js: string; raw: unknown } {
  if (attr.values?.length) {
    const v = attr.values[0]
    return typeof v === 'number'
      ? { js: String(v), raw: v }
      : { js: `'${v}'`, raw: v }
  }
  if (attr.type === 'number') {
    const val = attr.key.toLowerCase().includes('id') ? 1 : 0
    return { js: String(val), raw: val }
  }
  if (attr.type === 'boolean') return { js: 'true', raw: true }
  if (attr.type === 'object') return { js: '{}', raw: {} }
  if (attr.type === 'array') {
    if (attr.itemType === 'object') return { js: '[]', raw: [] }
    return { js: '[1, 2]', raw: [1, 2] }
  }
  return KNOWN_EXAMPLES[attr.key] ?? { js: "'example'", raw: 'example' }
}

// ---------------------------------------------------------------------------
// Parameter-table row builders
// ---------------------------------------------------------------------------

function buildFilterRows(filters?: Record<string, Filter>): string[][] {
  if (!filters) return []
  return Object.entries(filters).map(([name, filter]) => {
    const param = filter.required
      ? `\`filter[${name}]\` *`
      : `\`filter[${name}]\``
    const values = filter.values?.length
      ? filter.values
          .map((v) => `\`${typeof v === 'object' ? v.value : v}\``)
          .join(', ')
      : filter.type
    const defaultVal = Array.isArray(filter.default)
      ? filter.default.map((v) => `\`${v}\``).join(', ')
      : escapeCell(filter.default ?? '')
    return [param, escapeCell(defaultVal), escapeCell(values)]
  })
}

function buildPaginationRows(): string[][] {
  return [
    ['`page[size]`', '`50`', 'Maximum number of results per page'],
    ['`page[number]`', '`1`', 'Page number'],
  ]
}

function buildIncludeRows(includes?: string[]): string[][] {
  if (!includes?.length) return []
  return [['`include`', '', includes.map((i) => `\`${i}\``).join(', ')]]
}

function attrTypeLabel(attr: CreateAttribute): string {
  if (attr.type === 'array' && attr.itemType) {
    return `array of ${attr.itemType}s`
  }
  return attr.type
}

function buildAttributeRows(attributes: CreateAttribute[]): string[][] {
  return attributes.map((attr) => {
    const name = attr.required ? `\`${attr.key}\` *` : `\`${attr.key}\``
    let desc = ''
    if (attr.values?.length) {
      desc = attr.values.map((v) => `\`${v}\``).join(', ')
    }
    const text = attr.description ?? attr.helpText
    if (text) {
      desc = desc ? `${desc}. ${text}` : text
    }
    return [name, escapeCell(attrTypeLabel(attr)), escapeCell(desc)]
  })
}

// ---------------------------------------------------------------------------
// SDK code snippet builder
// ---------------------------------------------------------------------------

function sdkSnippet(parts: {
  endpoint: string
  varName: string
  method: string
  args: string
}): string {
  return [
    "import Confetti from 'confetti'",
    '',
    "const confetti = new Confetti({ apiKey: 'your-key' })",
    '',
    `const ${parts.varName} = await confetti.${parts.endpoint}.${parts.method}(${parts.args})`,
  ].join('\n')
}

function pickExampleAttrs(attrs: CreateAttribute[]): CreateAttribute[] {
  const display = attrs.filter(
    (a) =>
      a.required ||
      ['firstName', 'lastName', 'email', 'phone', 'comment', 'name', 'title'].includes(
        a.key,
      ),
  )
  return display.length > 0 ? display : attrs.slice(0, 4)
}

// ---------------------------------------------------------------------------
// Page generators
// ---------------------------------------------------------------------------

function generateListPage(model: Model): string {
  const name = model.name
  const paramRows = [
    ...buildFilterRows(model.filters),
    ...buildPaginationRows(),
    ...buildIncludeRows(model.includes),
  ]

  const filters = model.filters ? Object.entries(model.filters) : []
  let filterArg = ''
  let curlQuery = ''
  if (filters.length > 0) {
    const [filterKey, filter] = filters[0]
    const val = exampleFilterValue(filter)
    filterArg = `{\n  filter: { ${filterKey}: ${val.js} },\n  page: { size: 10, number: 1 },\n}`
    curlQuery = `?filter[${filterKey}]=${val.raw}`
  } else {
    filterArg = '{\n  page: { size: 10, number: 1 },\n}'
  }

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: model.endpoint,
    method: 'findAll',
    args: filterArg,
  })

  const curl = [
    `curl "https://api.confetti.events/${model.path}${curlQuery}" \\`,
    '  -H "Authorization: apikey your-key"',
  ].join('\n')

  const readAttrs = model.operations?.read?.attributes ?? []
  const tsInterface = buildTsInterface(capitalize(model.key), readAttrs)

  return new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `List ${pluralize(name)}`)
    .component('ApiEndpoint', { method: 'GET', path: `/${model.path}` })
    .paragraph(`Retrieve a paginated list of ${pluralize(name).toLowerCase()}.`)
    .heading(2, 'Parameters')
    .table(['Parameter', 'Default', 'Values / Description'], paramRows)
    .blockquote('Fields marked with **\\*** are required.')
    .heading(2, 'Request')
    .codeGroup([
      { label: 'JavaScript', lang: 'js', code: sdk },
      { label: 'cURL', lang: 'sh', code: curl },
    ])
    .heading(2, 'Response')
    .codeGroup([
      { label: 'TypeScript', lang: 'ts', code: tsInterface },
      { label: 'Formatted (SDK)', lang: 'json', code: json(model.sample.multiple.formatted) },
      { label: 'Raw (JSON:API)', lang: 'json', code: json(model.sample.multiple.raw) },
    ])
    .build()
}

function generateGetPage(model: Model): string {
  const name = model.name
  const includeRows = buildIncludeRows(model.includes)
  const sampleId =
    (model.sample.single.formatted as Record<string, unknown>).id ?? '2'

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: model.key,
    method: 'find',
    args: String(sampleId),
  })

  const curl = [
    `curl "https://api.confetti.events/${model.path}/${sampleId}" \\`,
    '  -H "Authorization: apikey your-key"',
  ].join('\n')

  const readAttrs = model.operations?.read?.attributes ?? []
  const tsInterface = buildTsInterface(capitalize(model.key), readAttrs)

  const md = new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `Get ${name}`)
    .component('ApiEndpoint', { method: 'GET', path: `/${model.path}/:id` })
    .paragraph(`Retrieve a single ${name.toLowerCase()} by its ID.`)

  if (includeRows.length > 0) {
    md.heading(2, 'Parameters')
      .table(['Parameter', 'Default', 'Values / Description'], includeRows)
  }

  return md
    .heading(2, 'Request')
    .codeGroup([
      { label: 'JavaScript', lang: 'js', code: sdk },
      { label: 'cURL', lang: 'sh', code: curl },
    ])
    .heading(2, 'Response')
    .codeGroup([
      { label: 'TypeScript', lang: 'ts', code: tsInterface },
      { label: 'Formatted (SDK)', lang: 'json', code: json(model.sample.single.formatted) },
      { label: 'Raw (JSON:API)', lang: 'json', code: json(model.sample.single.raw) },
    ])
    .build()
}

function generateCreatePage(model: Model): string {
  const name = model.name
  const attrs = model.operations?.create?.attributes ?? []
  const attrRows = buildAttributeRows(attrs)

  const displayAttrs = pickExampleAttrs(attrs)

  const jsFields = displayAttrs
    .map((a) => `  ${a.key}: ${exampleAttrValue(a).js},`)
    .join('\n')

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: model.key,
    method: 'create',
    args: `{\n${jsFields}\n}`,
  })

  const curlAttrs = Object.fromEntries(
    displayAttrs
      .filter((a) => !a.key.toLowerCase().includes('id') || a.key === 'eventId')
      .map((a) => [a.key, exampleAttrValue(a).raw]),
  )

  const curlBody = json({ data: { type: model.key, attributes: curlAttrs } })

  const curl = [
    `curl -X POST "https://api.confetti.events/${model.path}" \\`,
    '  -H "Content-Type: application/json" \\',
    '  -H "Authorization: apikey your-key" \\',
    `  -d '${curlBody}'`,
  ].join('\n')

  return new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `Create ${name}`)
    .component('ApiEndpoint', { method: 'POST', path: `/${model.path}` })
    .paragraph(`Create a new ${name.toLowerCase()}.`)
    .heading(2, 'Attributes')
    .table(['Attribute', 'Type', 'Description'], attrRows)
    .blockquote('Fields marked with **\\*** are required.')
    .heading(2, 'Request')
    .codeGroup([
      { label: 'JavaScript', lang: 'js', code: sdk },
      { label: 'cURL', lang: 'sh', code: curl },
    ])
    .build()
}

function generateUpdatePage(model: Model): string {
  const name = model.name
  const attrs = model.operations?.update?.attributes ?? []
  const attrRows = buildAttributeRows(attrs)

  const sampleId =
    (model.sample.single.formatted as Record<string, unknown>).id ?? '2'

  const displayAttrs = pickExampleAttrs(attrs)

  const jsFields = displayAttrs
    .map((a) => `  ${a.key}: ${exampleAttrValue(a).js},`)
    .join('\n')

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: model.key,
    method: 'update',
    args: `${sampleId}, {\n${jsFields}\n}`,
  })

  const curlAttrs = Object.fromEntries(
    displayAttrs
      .filter((a) => !a.key.toLowerCase().includes('id') || a.key === 'eventId')
      .map((a) => [a.key, exampleAttrValue(a).raw]),
  )

  const curlBody = json({
    data: { type: model.key, id: String(sampleId), attributes: curlAttrs },
  })

  const curl = [
    `curl -X PATCH "https://api.confetti.events/${model.path}/${sampleId}" \\`,
    '  -H "Content-Type: application/json" \\',
    '  -H "Authorization: apikey your-key" \\',
    `  -d '${curlBody}'`,
  ].join('\n')

  return new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `Update ${name}`)
    .component('ApiEndpoint', { method: 'PATCH', path: `/${model.path}/:id` })
    .paragraph(
      `Update an existing ${name.toLowerCase()}. Only the attributes you include are changed.`,
    )
    .heading(2, 'Attributes')
    .table(['Attribute', 'Type', 'Description'], attrRows)
    .blockquote('Fields marked with **\\*** are required.')
    .heading(2, 'Request')
    .codeGroup([
      { label: 'JavaScript', lang: 'js', code: sdk },
      { label: 'cURL', lang: 'sh', code: curl },
    ])
    .build()
}

// ---------------------------------------------------------------------------
// Changelog
// ---------------------------------------------------------------------------

async function generateChangelog(): Promise<void> {
  const localPath = join(ROOT, 'node_modules/confetti/CHANGELOG.md')
  let md: string
  if (existsSync(localPath)) {
    md = readFileSync(localPath, 'utf8')
    console.log('Using local changelog from linked confetti package')
  } else {
    try {
      const res = await fetch(CHANGELOG_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      md = await res.text()
      console.log('Generated changelog from GitHub')
    } catch (err) {
      console.warn(`Could not fetch changelog: ${err}`)
      return
    }
  }

  const normalized = md.replace(/^# /gm, '## ')

  const page = new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, 'Changelog')
    .paragraph(
      'Release history for the [Confetti Node.js SDK](https://github.com/confetti/confetti-node).',
    )
    .paragraph(normalized)
    .build()

  writeFileSync(join(DOCS_DIR, 'changelog.md'), page)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const resources: ResourceConfig[] = [
  { key: 'event', ops: ['list', 'get', 'create', 'update'] },
  { key: 'page', ops: ['list', 'get', 'create', 'update'] },
  { key: 'block', ops: ['list', 'get', 'create', 'update'] },
  { key: 'image', ops: ['list', 'get', 'create', 'update'] },
  { key: 'ticketBatch', ops: ['list', 'get'] },
  { key: 'ticket', ops: ['list', 'get', 'create', 'update'] },
  { key: 'contact', ops: ['list', 'get', 'create'] },
  { key: 'payment', ops: ['list', 'get'] },
  { key: 'form', ops: ['get'] },
  { key: 'formField', ops: ['get', 'create', 'update'] },
  { key: 'scheduleItem', ops: ['get', 'create', 'update'] },
  { key: 'speaker', ops: ['get', 'create', 'update'] },
  { key: 'organiser', ops: ['get', 'create', 'update'] },
  { key: 'sponsor', ops: ['get', 'create', 'update'] },
  { key: 'sponsorLevel', ops: ['get', 'create', 'update'] },
  { key: 'category', ops: ['list', 'get'] },
  { key: 'webhook', ops: ['list', 'get', 'create'] },
  { key: 'workspace', dir: 'workspace', ops: ['get'] },
]

const generators: Record<Op, (model: Model) => string> = {
  list: generateListPage,
  get: generateGetPage,
  create: generateCreatePage,
  update: generateUpdatePage,
}

for (const { key, dir, ops } of resources) {
  const model = confetti.models[key]
  if (!model) {
    console.warn(`Model not found: ${key}`)
    continue
  }

  const resourceDir = join(DOCS_DIR, dir ?? model.path)
  mkdirSync(resourceDir, { recursive: true })

  for (const op of ops) {
    writeFileSync(join(resourceDir, `${op}.md`), generators[op](model))
  }
}

await generateChangelog()

console.log('Generated API documentation in api/')
