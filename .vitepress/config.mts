import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llmstxt'

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
    logo: '/confetti-logo.svg',
    siteTitle: 'Confetti API',

    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Changelog', link: '/docs/changelog' },
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
      { text: 'confetti.events', link: 'https://confetti.events' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [{ text: 'Introduction', link: '/docs/' }],
        },
        {
          text: 'Events',
          collapsed: false,
          items: [
            { text: 'List Events', link: '/docs/events/list' },
            { text: 'Get Event', link: '/docs/events/get' },
          ],
        },
        {
          text: 'Tickets',
          collapsed: false,
          items: [
            { text: 'List Tickets', link: '/docs/tickets/list' },
            { text: 'Get Ticket', link: '/docs/tickets/get' },
            { text: 'Create Ticket', link: '/docs/tickets/create' },
          ],
        },
        {
          text: 'Contacts',
          collapsed: false,
          items: [
            { text: 'List Contacts', link: '/docs/contacts/list' },
            { text: 'Get Contact', link: '/docs/contacts/get' },
            { text: 'Create Contact', link: '/docs/contacts/create' },
          ],
        },
        {
          text: 'Payments',
          collapsed: false,
          items: [
            { text: 'List Payments', link: '/docs/payments/list' },
            { text: 'Get Payment', link: '/docs/payments/get' },
          ],
        },
        {
          text: 'Webhooks',
          collapsed: false,
          items: [
            { text: 'List Webhooks', link: '/docs/webhooks/list' },
            { text: 'Get Webhook', link: '/docs/webhooks/get' },
          ],
        },
        {
          text: 'Workspace',
          collapsed: false,
          items: [
            { text: 'Get Workspace', link: '/docs/workspace/get' },
          ],
        },
        {
          text: 'More',
          collapsed: false,
          items: [
            { text: 'Changelog', link: '/docs/changelog' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/confetti/confetti-docs' },
    ],

    footer: {
      message:
        'Built by <a href="https://confetti.events">Confetti</a> — the all-in-one event management platform.',
    },

    editLink: {
      pattern:
        'https://github.com/confetti/confetti-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
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
