import colors from 'vuetify/es5/util/colors'

export default {

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - takoyaki',
    title: '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'とある大学院生の備忘録的なポートフォリオ的なサイトです。'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'takoyaki' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.ordev.link/' },
      { hid: 'og:title', property: 'og:title', content: 'takoyaki' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'とある大学院生の備忘録的なポートフォリオ的なサイトです。'
      },
      { hid: 'og:image', property: 'og:image', content: `/icon-512x512.png` },
      { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'takoyaki' },
      { hid: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/favicon.ico`,
      },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `/apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icon-16x16.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icon-32x32.png` },
      { rel: 'manifest', href: `/manifest.json` },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css'
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/markdown.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // UAの場合
    // '@nuxtjs/google-analytics',
    // 日付フォーマット
    '@nuxtjs/date-fns',
    // 環境変数読み込みのため
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'vue-scrollto/nuxt',
      {
        offset: -10
      }
    ],
    [
      // GA4の場合
      '@nuxtjs/google-gtag',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        debug: false,
      }
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.ordev.link',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      },
      remarkPlugins: [
        'remark-math',
        'remark-emoji',
        'remark-code-titles',
      ],
      rehypePlugins: [
        'rehype-katex',
      ],
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          base: colors.indigo,
        },
        light: {
          base: colors.indigo.lighten4,
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    QIITA_ENDPOINT_URL: process.env.QIITA_ENDPOINT_URL,
    QIITA_API_KEY: process.env.QIITA_API_KEY,
  },

  router: {
    middleware: 'trailingSlashRedirect',
  },

  generate: {
    subFolders: false,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files
        .filter(
          file => file.path !== '/settings' &&
                  file.path !== '/template' &&
                  file.path !== '/hello'
        )
        .map((file) => {
          return file.path
        })
    }
  }
}
