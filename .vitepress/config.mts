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
          items: [{ text: 'Introduction', link: '/api/' }],
        },
        {
          text: 'Events',
          collapsed: false,
          items: [
            { text: 'List Events', link: '/api/events/list' },
            { text: 'Get Event', link: '/api/events/get' },
          ],
        },
        {
          text: 'Tickets',
          collapsed: false,
          items: [
            { text: 'List Tickets', link: '/api/tickets/list' },
            { text: 'Get Ticket', link: '/api/tickets/get' },
            { text: 'Create Ticket', link: '/api/tickets/create' },
          ],
        },
        {
          text: 'Contacts',
          collapsed: false,
          items: [
            { text: 'List Contacts', link: '/api/contacts/list' },
            { text: 'Get Contact', link: '/api/contacts/get' },
            { text: 'Create Contact', link: '/api/contacts/create' },
          ],
        },
        {
          text: 'Payments',
          collapsed: false,
          items: [
            { text: 'List Payments', link: '/api/payments/list' },
            { text: 'Get Payment', link: '/api/payments/get' },
          ],
        },
        {
          text: 'Webhooks',
          collapsed: false,
          items: [
            { text: 'List Webhooks', link: '/api/webhooks/list' },
            { text: 'Get Webhook', link: '/api/webhooks/get' },
          ],
        },
        {
          text: 'Workspace',
          collapsed: false,
          items: [
            { text: 'Get Workspace', link: '/api/workspace/get' },
          ],
        },
        {
          text: 'More',
          collapsed: false,
          items: [
            { text: 'Changelog', link: '/api/changelog' },
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
