import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import ApiEndpoint from './components/ApiEndpoint.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiEndpoint', ApiEndpoint)
  },
} satisfies Theme
