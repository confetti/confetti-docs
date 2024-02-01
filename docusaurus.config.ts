import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
const { ProvidePlugin } = require('webpack')

const config: Config = {
  title: 'Confetti API Documentation',
  // tagline: 'Make events easier.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.confetti.events',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'confetti', // Usually your GitHub org/user name.
  projectName: 'confetti-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/confetti/confetti-docs',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/confetti/confetti-docs',
        // },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Confetti API',
      logo: {
        alt: 'Confetti Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // { to: '/changelog', label: 'Changelog', position: 'left' },
        {
          href: 'https://github.com/confetti/confetti-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Support',
          items: [
            {
              label: 'Help Center',
              href: 'https://support.confetti.events',
            },
          ],
        },
        {
          // title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/confetti/confetti-docs',
            },
          ],
        },
        {
          // title: 'Docs',
          items: [
            {
              label: 'Confetti Node.js wrapper',
              href: 'https://github.com/confetti/confetti-node',
            },
          ],
        },
        {
          items: [
            {
              label: 'Confetti.events',
              href: 'https://confetti.events',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    () => ({
      name: 'confetti-node-dependency-fix',
      configureWebpack(config) {
        return {
          resolve: {
            fallback: {
              url: false,
              util: require.resolve('util/'),
            },
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve('process/browser'),
            }),
          ],
        }
      },
    }),
  ],
}

export default config
