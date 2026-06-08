import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llmstxt'
import { mkdirSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

function generateRedirects(distDir: string) {
  const apiDir = join(distDir, 'api')
  const docsDir = join(distDir, 'docs')

  function walk(dir: string): string[] {
    const files: string[] = []
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) {
        files.push(...walk(full))
      } else if (entry.endsWith('.html')) {
        files.push(full)
      }
    }
    return files
  }

  function writeRedirect(dest: string, target: string) {
    mkdirSync(join(dest, '..'), { recursive: true })
    writeFileSync(
      dest,
      `<!DOCTYPE html><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><script>location.replace("${target}")</script>`,
    )
  }

  for (const file of walk(apiDir)) {
    const rel = relative(apiDir, file)
    const target = '/' + join('api', rel).replace(/\.html$/, '').replace(/\/index$/, '/')
    writeRedirect(join(docsDir, rel), target)
  }

  writeRedirect(join(docsDir, 'intro.html'), '/api/')
}

export default defineConfig({
  title: 'Confetti API',
  description:
    'API documentation for the Confetti event management platform. Build integrations with events, tickets, contacts, payments, and webhooks.',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'link',
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: 'https://d2wd18kp3k18ix.cloudfront.net/default-fonts/SourceSans3VF-Roman.ttf.woff2?2',
      },
    ],
  ],

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/favicon.png',
    siteTitle: 'Confetti API',

    nav: [
      { text: 'Docs', link: '/api/' },
      { text: 'Changelog', link: '/api/changelog' },
      {
        text: 'Resources',
        items: [
          {
            text: 'Node.js SDK',
            link: 'https://github.com/confetti/confetti-node',
          },
          {
            text: 'Help Center',
            link: 'https://support.confetti.events',
          },
          {
            text: 'Zapier Integration',
            link: 'https://zapier.com/apps/confetti/integrations',
          },
        ],
      },
    ],

    sidebar: {
      '/api/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/api/' },
            { text: 'Changelog', link: '/api/changelog' },
          ],
        },
        {
          text: 'Events',
          collapsed: false,
          items: [
            { text: 'List Events', link: '/api/events/list' },
            { text: 'Get Event', link: '/api/events/get' },
            { text: 'Create Event', link: '/api/events/create' },
            { text: 'Update Event', link: '/api/events/update' },
          ],
        },
        {
          text: 'Pages',
          collapsed: true,
          items: [
            { text: 'List Pages', link: '/api/pages/list' },
            { text: 'Get Page', link: '/api/pages/get' },
            { text: 'Create Page', link: '/api/pages/create' },
            { text: 'Update Page', link: '/api/pages/update' },
          ],
        },
        {
          text: 'Blocks',
          collapsed: true,
          items: [
            { text: 'List Blocks', link: '/api/blocks/list' },
            { text: 'Get Block', link: '/api/blocks/get' },
            { text: 'Create Block', link: '/api/blocks/create' },
            { text: 'Update Block', link: '/api/blocks/update' },
          ],
        },
        {
          text: 'Images',
          collapsed: true,
          items: [
            { text: 'List Images', link: '/api/images/list' },
            { text: 'Get Image', link: '/api/images/get' },
            { text: 'Create Image', link: '/api/images/create' },
            { text: 'Update Image', link: '/api/images/update' },
          ],
        },
        {
          text: 'Ticket Batches',
          collapsed: true,
          items: [
            { text: 'List Ticket Batches', link: '/api/ticket-batches/list' },
            { text: 'Get Ticket Batch', link: '/api/ticket-batches/get' },
          ],
        },
        {
          text: 'Tickets',
          collapsed: false,
          items: [
            { text: 'List Tickets', link: '/api/tickets/list' },
            { text: 'Get Ticket', link: '/api/tickets/get' },
            { text: 'Create Ticket', link: '/api/tickets/create' },
            { text: 'Update Ticket', link: '/api/tickets/update' },
          ],
        },
        {
          text: 'Contacts',
          collapsed: true,
          items: [
            { text: 'List Contacts', link: '/api/contacts/list' },
            { text: 'Get Contact', link: '/api/contacts/get' },
            { text: 'Create Contact', link: '/api/contacts/create' },
          ],
        },
        {
          text: 'Payments',
          collapsed: true,
          items: [
            { text: 'List Payments', link: '/api/payments/list' },
            { text: 'Get Payment', link: '/api/payments/get' },
          ],
        },
        {
          text: 'Forms',
          collapsed: true,
          items: [
            { text: 'Get Form', link: '/api/forms/get' },
          ],
        },
        {
          text: 'Form Fields',
          collapsed: true,
          items: [
            { text: 'Get Form Field', link: '/api/form-fields/get' },
            { text: 'Create Form Field', link: '/api/form-fields/create' },
            { text: 'Update Form Field', link: '/api/form-fields/update' },
          ],
        },
        {
          text: 'Schedule Items',
          collapsed: true,
          items: [
            { text: 'Get Schedule Item', link: '/api/schedule-items/get' },
            { text: 'Create Schedule Item', link: '/api/schedule-items/create' },
            { text: 'Update Schedule Item', link: '/api/schedule-items/update' },
          ],
        },
        {
          text: 'Speakers',
          collapsed: true,
          items: [
            { text: 'Get Speaker', link: '/api/speakers/get' },
            { text: 'Create Speaker', link: '/api/speakers/create' },
            { text: 'Update Speaker', link: '/api/speakers/update' },
          ],
        },
        {
          text: 'Organisers',
          collapsed: true,
          items: [
            { text: 'Get Organiser', link: '/api/organisers/get' },
            { text: 'Create Organiser', link: '/api/organisers/create' },
            { text: 'Update Organiser', link: '/api/organisers/update' },
          ],
        },
        {
          text: 'Sponsors',
          collapsed: true,
          items: [
            { text: 'Get Sponsor', link: '/api/sponsors/get' },
            { text: 'Create Sponsor', link: '/api/sponsors/create' },
            { text: 'Update Sponsor', link: '/api/sponsors/update' },
          ],
        },
        {
          text: 'Sponsor Levels',
          collapsed: true,
          items: [
            { text: 'Get Sponsor Level', link: '/api/sponsor-levels/get' },
            { text: 'Create Sponsor Level', link: '/api/sponsor-levels/create' },
            { text: 'Update Sponsor Level', link: '/api/sponsor-levels/update' },
          ],
        },
        {
          text: 'Categories',
          collapsed: true,
          items: [
            { text: 'List Categories', link: '/api/categories/list' },
            { text: 'Get Category', link: '/api/categories/get' },
          ],
        },
        {
          text: 'Webhooks',
          collapsed: true,
          items: [
            { text: 'List Webhooks', link: '/api/webhooks/list' },
            { text: 'Get Webhook', link: '/api/webhooks/get' },
            { text: 'Create Webhook', link: '/api/webhooks/create' },
          ],
        },
        {
          text: 'Workspace',
          collapsed: true,
          items: [
            { text: 'Get Workspace', link: '/api/workspace/get' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/confetti/confetti-node' },
    ],

    editLink: {
      pattern:
        'https://github.com/confetti/confetti-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },

  buildEnd({ outDir }) {
    generateRedirects(outDir)
  },

  vite: {
    plugins: [
      llmstxt({
        hostname: 'https://docs.confetti.events',
        llmsFullFile: true,
        mdFiles: true,
      }),
    ],
  },
})
