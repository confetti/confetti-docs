import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { markdownTable } from 'markdown-table'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const require = createRequire(join(ROOT, 'package.json'))
const raw = require('confetti')
const confetti: ConfettiPackage = raw['module.exports'] ?? raw
const DOCS_DIR = join(ROOT, 'docs')

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
}

interface CreateAttribute {
  key: string
  label: string
  type: string
  required?: boolean
  multiple?: boolean
  values?: string[]
  helpText?: string
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
  }
}

interface ConfettiPackage {
  models: Record<string, Model>
}

interface ResourceConfig {
  key: string
  ops: Array<'list' | 'get' | 'create'>
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

const humanize = (key: string): string =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())

const escapeCell = (s: unknown): string =>
  String(s ?? '').replace(/\|/g, '\\|')

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
    const v = String(filter.values[0].value ?? filter.values[0])
    return { js: `'${v}'`, raw: v }
  }
  if (filter.type === 'number') return { js: '1', raw: '1' }
  if (filter.type === 'boolean') return { js: 'true', raw: 'true' }
  return { js: "'example'", raw: 'example' }
}

function exampleAttrValue(attr: CreateAttribute): { js: string; raw: unknown } {
  if (attr.values?.length) return { js: `'${attr.values[0]}'`, raw: attr.values[0] }
  if (attr.type === 'number') {
    const val = attr.key.toLowerCase().includes('id') ? 1 : 0
    return { js: String(val), raw: val }
  }
  if (attr.type === 'boolean') return { js: 'true', raw: true }
  if (attr.type === 'array') return { js: '[1, 2]', raw: [1, 2] }
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
    const values = filter.values
      ? filter.values.map((v) => `\`${v.value ?? v}\``).join(', ')
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

function buildCreateRows(attributes: CreateAttribute[]): string[][] {
  return attributes.map((attr) => {
    const name = attr.required ? `\`${attr.key}\` *` : `\`${attr.key}\``
    const type = attr.multiple ? `array of ${attr.type}s` : attr.type
    let desc = ''
    if (attr.values) {
      desc = (Array.isArray(attr.values) ? attr.values : [])
        .map((v) => `\`${v}\``)
        .join(', ')
    }
    if (attr.helpText) {
      desc = desc ? `${desc}. ${attr.helpText}` : attr.helpText
    }
    return [name, escapeCell(type), escapeCell(desc)]
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

// ---------------------------------------------------------------------------
// Page generators
// ---------------------------------------------------------------------------

function generateListPage(key: string, model: Model): string {
  const name = humanize(key)
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
    varName: `${key}s`,
    method: 'findAll',
    args: filterArg,
  })

  const curl = [
    `curl "https://api.confetti.events/${model.endpoint}${curlQuery}" \\`,
    '  -H "Authorization: apikey your-key"',
  ].join('\n')

  const readAttrs = model.operations?.read?.attributes ?? []
  const tsInterface = buildTsInterface(capitalize(key), readAttrs)

  return new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `List ${name}s`)
    .component('ApiEndpoint', { method: 'GET', path: `/${model.endpoint}` })
    .paragraph(`Retrieve a paginated list of ${name.toLowerCase()}s.`)
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

function generateGetPage(key: string, model: Model): string {
  const name = humanize(key)
  const includeRows = buildIncludeRows(model.includes)
  const sampleId =
    (model.sample.single.formatted as Record<string, unknown>).id ?? '2'

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: key,
    method: 'find',
    args: String(sampleId),
  })

  const curl = [
    `curl "https://api.confetti.events/${model.endpoint}/${sampleId}" \\`,
    '  -H "Authorization: apikey your-key"',
  ].join('\n')

  const readAttrs = model.operations?.read?.attributes ?? []
  const tsInterface = buildTsInterface(capitalize(key), readAttrs)

  const md = new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `Get ${name}`)
    .component('ApiEndpoint', { method: 'GET', path: `/${model.endpoint}/:id` })
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

function generateCreatePage(key: string, model: Model): string {
  const name = humanize(key)
  const attrs = model.operations?.create?.attributes ?? []
  const attrRows = buildCreateRows(attrs)

  const displayAttrs = attrs.filter(
    (a) =>
      a.required ||
      ['firstName', 'lastName', 'email', 'phone', 'comment'].includes(a.key),
  )

  const jsFields = displayAttrs
    .map((a) => `  ${a.key}: ${exampleAttrValue(a).js},`)
    .join('\n')

  const sdk = sdkSnippet({
    endpoint: model.endpoint,
    varName: key,
    method: 'create',
    args: `{\n${jsFields}\n}`,
  })

  const curlAttrs = Object.fromEntries(
    displayAttrs
      .filter((a) => !a.key.toLowerCase().includes('id') || a.key === 'eventId')
      .map((a) => [a.key, exampleAttrValue(a).raw]),
  )

  const curlBody = json({ data: { type: key, attributes: curlAttrs } })

  const curl = [
    `curl -X POST "https://api.confetti.events/${model.endpoint}" \\`,
    '  -H "Content-Type: application/json" \\',
    '  -H "Authorization: apikey your-key" \\',
    `  -d '${curlBody}'`,
  ].join('\n')

  return new MdBuilder()
    .frontmatter({ outline: 'deep' })
    .heading(1, `Create ${name}`)
    .component('ApiEndpoint', { method: 'POST', path: `/${model.endpoint}` })
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

// ---------------------------------------------------------------------------
// Changelog
// ---------------------------------------------------------------------------

async function generateChangelog(): Promise<void> {
  let md: string
  try {
    const res = await fetch(CHANGELOG_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    md = await res.text()
  } catch (err) {
    console.warn(`Could not fetch changelog: ${err}`)
    return
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
  console.log('Generated changelog from GitHub')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const resources: ResourceConfig[] = [
  { key: 'event', ops: ['list', 'get'] },
  { key: 'ticket', ops: ['list', 'get', 'create'] },
  { key: 'contact', ops: ['list', 'get', 'create'] },
  { key: 'payment', ops: ['list', 'get'] },
  { key: 'webhook', ops: ['list', 'get'] },
  { key: 'workspace', ops: ['get'] },
]

const generators: Record<string, (key: string, model: Model) => string> = {
  list: generateListPage,
  get: generateGetPage,
  create: generateCreatePage,
}

for (const { key, ops } of resources) {
  const dir = join(DOCS_DIR, key === 'workspace' ? 'workspace' : `${key}s`)
  mkdirSync(dir, { recursive: true })

  const model = confetti.models[key] as Model

  for (const op of ops) {
    writeFileSync(join(dir, `${op}.md`), generators[op](key, model))
  }
}

await generateChangelog()

console.log('Generated API documentation in docs/')
