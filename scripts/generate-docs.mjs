/**
 * Generate API documentation markdown files from the confetti npm package.
 *
 * This script reads model metadata (sample responses, filters, includes,
 * create-operation attributes) from `confetti` and writes VitePress-compatible
 * markdown into the `guide/` directory. It runs before every `vitepress build`
 * and `vitepress dev` invocation so that the docs stay in sync with the
 * package.
 */

import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// confetti is a CJS package – use createRequire to load it
const require = createRequire(import.meta.url)
const confetti = require('confetti')

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GUIDE = join(ROOT, 'guide')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Pretty-print JSON, indented with two spaces. */
const json = (obj) => JSON.stringify(obj, null, 2)

/** Capitalise the first letter. */
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

/** Produce a human-friendly title from a model key (e.g. "ticketBatch" → "Ticket Batch"). */
const humanise = (key) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())

/** Build a markdown table from an array of rows (each an array of cell strings). */
function mdTable(headers, rows) {
  if (rows.length === 0) return ''
  const sep = headers.map(() => '---')
  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${sep.join(' | ')} |`,
    ...rows.map((r) => `| ${r.join(' | ')} |`),
  ]
  return lines.join('\n')
}

/** Escape pipe characters inside table cells. */
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|')

// ---------------------------------------------------------------------------
// Parameter table builders
// ---------------------------------------------------------------------------

function filterRows(filters) {
  if (!filters || Object.keys(filters).length === 0) return []
  return Object.entries(filters).map(([name, filter]) => {
    const paramName = filter.required
      ? `\`filter[${name}]\` *`
      : `\`filter[${name}]\``
    let values = ''
    if (['string', 'boolean', 'number'].includes(filter.type)) {
      values = filter.type
    } else if (filter.values) {
      values = filter.values.map((v) => `\`${v.value ?? v}\``).join(', ')
    }
    const defaultVal = Array.isArray(filter.default)
      ? filter.default.map((v) => `\`${v}\``).join(', ')
      : esc(filter.default ?? '')
    return [paramName, esc(defaultVal), esc(values)]
  })
}

function paginationRows() {
  return [
    ['`page[size]`', '`50`', 'Maximum number of results per page'],
    ['`page[number]`', '`1`', 'Page number'],
  ]
}

function includeRows(includes) {
  if (!includes || includes.length === 0) return []
  return [
    [
      '`include`',
      '',
      includes.map((i) => `\`${i}\``).join(', '),
    ],
  ]
}

function createAttributeRows(attributes) {
  if (!attributes || attributes.length === 0) return []
  return attributes.map((attr) => {
    const name = attr.required ? `\`${attr.key}\` *` : `\`${attr.key}\``
    let type = attr.type
    if (attr.multiple) type = `array of ${type}s`

    let description = ''
    if (attr.values) {
      description = (Array.isArray(attr.values) ? attr.values : []).map((v) => `\`${v}\``).join(', ')
    }
    if (attr.helpText) {
      description = description ? `${description}. ${attr.helpText}` : attr.helpText
    }
    return [name, esc(type), esc(description)]
  })
}

// ---------------------------------------------------------------------------
// Page generators
// ---------------------------------------------------------------------------

function generateFindAllPage(modelKey) {
  const model = confetti.models[modelKey]
  const name = humanise(modelKey)
  const endpoint = model.endpoint

  // Parameter table
  const rows = [
    ...filterRows(model.filters),
    ...paginationRows(),
    ...includeRows(model.includes),
  ]
  const table = mdTable(['Parameter', 'Default', 'Values / Description'], rows)

  // Code examples
  const jsFilterExample = (() => {
    const filters = model.filters || {}
    const filterKeys = Object.keys(filters)
    if (filterKeys.length === 0) return ''
    // Pick the first filter as an example
    const [key, filter] = Object.entries(filters)[0]
    let exampleValue = ''
    if (filter.values && filter.values.length > 0) {
      exampleValue = `'${filter.values[0].value ?? filter.values[0]}'`
    } else if (filter.type === 'number') {
      exampleValue = '1'
    } else if (filter.type === 'boolean') {
      exampleValue = 'true'
    } else {
      exampleValue = "'example'"
    }
    return `\n  filter: {\n    ${key}: ${exampleValue},\n  },`
  })()

  const curlFilter = (() => {
    const filters = model.filters || {}
    const filterKeys = Object.keys(filters)
    if (filterKeys.length === 0) return ''
    const [key, filter] = Object.entries(filters)[0]
    let val = ''
    if (filter.values && filter.values.length > 0) {
      val = filter.values[0].value ?? filter.values[0]
    } else if (filter.type === 'number') {
      val = '1'
    } else if (filter.type === 'boolean') {
      val = 'true'
    } else {
      val = 'example'
    }
    return `?filter[${key}]=${val}`
  })()

  const sampleFormatted = json(model.sample.multiple.formatted)
  const sampleRaw = json(model.sample.multiple.raw)

  return `---
outline: deep
---

# Find All ${name}s

Retrieve a paginated list of ${name.toLowerCase()}s.

## Parameters

${table}

> Parameters marked with **\\*** are required.

## Request

::: code-group

\`\`\`js [JavaScript]
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })

const ${modelKey}s = await confetti.${endpoint}.findAll({${jsFilterExample}
  page: {
    size: 10,
    number: 1,
  },
})
\`\`\`

\`\`\`sh [cURL]
curl "https://api.confetti.events/${endpoint}${curlFilter}" \\
  -H "Authorization: apikey your-key"
\`\`\`

:::

## Response

::: code-group

\`\`\`json [Formatted (SDK)]
${sampleFormatted}
\`\`\`

\`\`\`json [Raw (JSON:API)]
${sampleRaw}
\`\`\`

:::
`
}

function generateFindOnePage(modelKey) {
  const model = confetti.models[modelKey]
  const name = humanise(modelKey)
  const endpoint = model.endpoint

  // Include table (if any)
  const rows = includeRows(model.includes)
  const table = rows.length
    ? mdTable(['Parameter', 'Default', 'Values / Description'], rows)
    : ''

  const sampleFormatted = json(model.sample.single.formatted)
  const sampleRaw = json(model.sample.single.raw)

  const paramSection = table
    ? `## Parameters\n\n${table}\n`
    : ''

  // Determine a sample ID from the sample data
  const sampleId = model.sample.single.formatted.id ?? '2'

  return `---
outline: deep
---

# Find One ${name}

Retrieve a single ${name.toLowerCase()} by its ID.

${paramSection}
## Request

::: code-group

\`\`\`js [JavaScript]
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })

const ${modelKey} = await confetti.${endpoint}.find(${sampleId})
\`\`\`

\`\`\`sh [cURL]
curl "https://api.confetti.events/${endpoint}/${sampleId}" \\
  -H "Authorization: apikey your-key"
\`\`\`

:::

## Response

::: code-group

\`\`\`json [Formatted (SDK)]
${sampleFormatted}
\`\`\`

\`\`\`json [Raw (JSON:API)]
${sampleRaw}
\`\`\`

:::
`
}

function generateCreatePage(modelKey) {
  const model = confetti.models[modelKey]
  const name = humanise(modelKey)
  const endpoint = model.endpoint
  const attrs = model.operations?.create?.attributes ?? []

  const rows = createAttributeRows(attrs)
  const table = mdTable(['Parameter', 'Type', 'Description'], rows)

  // Build a JS example object from create attributes
  const jsFields = attrs
    .filter((a) => a.required || ['firstName', 'lastName', 'email', 'phone', 'comment'].includes(a.key))
    .map((a) => {
      let val = ''
      if (a.values && a.values.length > 0) {
        val = `'${a.values[0]}'`
      } else if (a.type === 'number') {
        val = a.key.toLowerCase().includes('id') ? '1' : '0'
      } else if (a.type === 'boolean') {
        val = 'true'
      } else if (a.type === 'array') {
        val = '[1, 2]'
      } else {
        // Provide sensible example strings
        const examples = {
          firstName: "'Jane'",
          lastName: "'Doe'",
          email: "'jane@example.com'",
          phone: "'+46701234567'",
          comment: "'A note'",
          company: "'Acme Inc'",
          url: "'https://example.com/webhook'",
          type: "'ticket.attending'",
          provider: "'zapier'",
          status: "'active'",
        }
        val = examples[a.key] ?? `'example'`
      }
      return `  ${a.key}: ${val},`
    })
    .join('\n')

  // Build a JSON:API cURL body
  const curlAttrs = attrs
    .filter((a) => a.required || ['firstName', 'lastName', 'email', 'phone', 'comment'].includes(a.key))
    .filter((a) => !a.key.toLowerCase().includes('id') || a.key === 'eventId')
    .reduce((acc, a) => {
      let val
      if (a.values && a.values.length > 0) val = a.values[0]
      else if (a.type === 'number') val = 1
      else if (a.type === 'boolean') val = true
      else if (a.type === 'array') val = [1, 2]
      else {
        const examples = {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@example.com',
          phone: '+46701234567',
          comment: 'A note',
          company: 'Acme Inc',
          url: 'https://example.com/webhook',
          type: 'ticket.attending',
          provider: 'zapier',
          status: 'active',
        }
        val = examples[a.key] ?? 'example'
      }
      acc[a.key] = val
      return acc
    }, {})

  const curlBody = json({
    data: {
      type: modelKey,
      attributes: curlAttrs,
    },
  })

  return `---
outline: deep
---

# Create ${name}

Create a new ${name.toLowerCase()}.

## Parameters

${table}

> Parameters marked with **\\*** are required.

## Request

::: code-group

\`\`\`js [JavaScript]
const Confetti = require('confetti')

const confetti = new Confetti({ apiKey: 'your-key' })

const ${modelKey} = await confetti.${endpoint}.create({
${jsFields}
})
\`\`\`

\`\`\`sh [cURL]
curl -X POST "https://api.confetti.events/${endpoint}" \\
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

/** Resources to generate and their available operations. */
const resources = [
  { key: 'event', ops: ['findAll', 'findOne'] },
  { key: 'ticket', ops: ['findAll', 'findOne', 'create'] },
  { key: 'contact', ops: ['findAll', 'findOne', 'create'] },
  { key: 'payment', ops: ['findAll', 'findOne'] },
  { key: 'webhook', ops: ['findAll', 'findOne'] },
  { key: 'workspace', ops: ['findOne'] },
]

for (const { key, ops } of resources) {
  const dir = join(GUIDE, key === 'workspace' ? 'workspace' : `${key}s`)
  mkdirSync(dir, { recursive: true })

  if (ops.includes('findAll')) {
    writeFileSync(join(dir, 'find-all.md'), generateFindAllPage(key))
  }
  if (ops.includes('findOne')) {
    writeFileSync(join(dir, 'find-one.md'), generateFindOnePage(key))
  }
  if (ops.includes('create')) {
    writeFileSync(join(dir, 'create.md'), generateCreatePage(key))
  }
}

console.log('✓ Generated API documentation in guide/')
