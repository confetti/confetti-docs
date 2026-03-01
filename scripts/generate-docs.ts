import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const require = createRequire(join(ROOT, 'package.json'))
const raw = require('confetti')
const confetti: ConfettiPackage = raw['module.exports'] ?? raw
const DOCS_DIR = join(ROOT, 'docs')

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
    read?: unknown
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const json = (obj: unknown): string => JSON.stringify(obj, null, 2)

const humanize = (key: string): string =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())

const escapeCell = (s: unknown): string =>
  String(s ?? '').replace(/\|/g, '\\|')

function mdTable(headers: string[], rows: string[][]): string {
  if (rows.length === 0) return ''
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.join(' | ')} |`),
  ].join('\n')
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
// Page generators
// ---------------------------------------------------------------------------

function generateListPage(key: string, model: Model): string {
  const name = humanize(key)
  const rows = [
    ...buildFilterRows(model.filters),
    ...buildPaginationRows(),
    ...buildIncludeRows(model.includes),
  ]

  const filters = model.filters ? Object.entries(model.filters) : []
  let jsFilterArg = ''
  let curlQuery = ''
  if (filters.length > 0) {
    const [filterKey, filter] = filters[0]
    const val = exampleFilterValue(filter)
    jsFilterArg = `\n  filter: { ${filterKey}: ${val.js} },`
    curlQuery = `?filter[${filterKey}]=${val.raw}`
  }

  return `---
outline: deep
---

# List ${name}s

<ApiEndpoint method="GET" path="/${model.endpoint}" />

Retrieve a paginated list of ${name.toLowerCase()}s.

## Parameters

${mdTable(['Parameter', 'Default', 'Values / Description'], rows)}

> Fields marked with **\\*** are required.

## Request

::: code-group

\`\`\`js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ${key}s = await confetti.${model.endpoint}.findAll({${jsFilterArg}
  page: { size: 10, number: 1 },
})
\`\`\`

\`\`\`sh [cURL]
curl "https://api.confetti.events/${model.endpoint}${curlQuery}" \\
  -H "Authorization: apikey your-key"
\`\`\`

:::

## Response

::: code-group

\`\`\`json [Formatted (SDK)]
${json(model.sample.multiple.formatted)}
\`\`\`

\`\`\`json [Raw (JSON:API)]
${json(model.sample.multiple.raw)}
\`\`\`

:::
`
}

function generateGetPage(key: string, model: Model): string {
  const name = humanize(key)
  const rows = buildIncludeRows(model.includes)
  const sampleId =
    (model.sample.single.formatted as Record<string, unknown>).id ?? '2'

  const paramSection = rows.length
    ? `## Parameters\n\n${mdTable(['Parameter', 'Default', 'Values / Description'], rows)}\n\n`
    : ''

  return `---
outline: deep
---

# Get ${name}

<ApiEndpoint method="GET" path="/${model.endpoint}/:id" />

Retrieve a single ${name.toLowerCase()} by its ID.

${paramSection}## Request

::: code-group

\`\`\`js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ${key} = await confetti.${model.endpoint}.find(${sampleId})
\`\`\`

\`\`\`sh [cURL]
curl "https://api.confetti.events/${model.endpoint}/${sampleId}" \\
  -H "Authorization: apikey your-key"
\`\`\`

:::

## Response

::: code-group

\`\`\`json [Formatted (SDK)]
${json(model.sample.single.formatted)}
\`\`\`

\`\`\`json [Raw (JSON:API)]
${json(model.sample.single.raw)}
\`\`\`

:::
`
}

function generateCreatePage(key: string, model: Model): string {
  const name = humanize(key)
  const attrs = model.operations?.create?.attributes ?? []
  const rows = buildCreateRows(attrs)

  const displayAttrs = attrs.filter(
    (a) =>
      a.required ||
      ['firstName', 'lastName', 'email', 'phone', 'comment'].includes(a.key),
  )

  const jsFields = displayAttrs
    .map((a) => `  ${a.key}: ${exampleAttrValue(a).js},`)
    .join('\n')

  const curlAttrs = Object.fromEntries(
    displayAttrs
      .filter((a) => !a.key.toLowerCase().includes('id') || a.key === 'eventId')
      .map((a) => [a.key, exampleAttrValue(a).raw]),
  )

  const curlBody = json({ data: { type: key, attributes: curlAttrs } })

  return `---
outline: deep
---

# Create ${name}

<ApiEndpoint method="POST" path="/${model.endpoint}" />

Create a new ${name.toLowerCase()}.

## Attributes

${mdTable(['Attribute', 'Type', 'Description'], rows)}

> Fields marked with **\\*** are required.

## Request

::: code-group

\`\`\`js [JavaScript]
import Confetti from 'confetti'

const confetti = new Confetti({ apiKey: 'your-key' })

const ${key} = await confetti.${model.endpoint}.create({
${jsFields}
})
\`\`\`

\`\`\`sh [cURL]
curl -X POST "https://api.confetti.events/${model.endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: apikey your-key" \\
  -d '${curlBody}'
\`\`\`

:::
`
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

console.log('Generated API documentation in docs/')
