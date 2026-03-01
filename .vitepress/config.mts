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

  // Clean URLs without .html extension
  cleanUrls: true,

  themeConfig: {
    logo: '/confetti-logo.svg',
    siteTitle: 'Confetti API',

    nav: [
      { text: 'Docs', link: '/guide/' },
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
      '/guide/': [
        {
          text: 'Getting Started',
          items: [{ text: 'Introduction', link: '/guide/' }],
        },
        {
          text: 'Events',
          collapsed: false,
          items: [
            { text: 'Find All', link: '/guide/events/find-all' },
            { text: 'Find One', link: '/guide/events/find-one' },
          ],
        },
        {
          text: 'Tickets',
          collapsed: false,
          items: [
            { text: 'Find All', link: '/guide/tickets/find-all' },
            { text: 'Find One', link: '/guide/tickets/find-one' },
            { text: 'Create', link: '/guide/tickets/create' },
          ],
        },
        {
          text: 'Payments',
          collapsed: false,
          items: [
            { text: 'Find All', link: '/guide/payments/find-all' },
            { text: 'Find One', link: '/guide/payments/find-one' },
          ],
        },
        {
          text: 'Webhooks',
          collapsed: false,
          items: [
            { text: 'Find All', link: '/guide/webhooks/find-all' },
            { text: 'Find One', link: '/guide/webhooks/find-one' },
          ],
        },
        {
          text: 'Workspace',
          collapsed: false,
          items: [
            { text: 'Find One', link: '/guide/workspace/find-one' },
          ],
        },
        {
          text: 'Contacts',
          collapsed: false,
          items: [
            { text: 'Find All', link: '/guide/contacts/find-all' },
            { text: 'Find One', link: '/guide/contacts/find-one' },
            { text: 'Create', link: '/guide/contacts/create' },
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
