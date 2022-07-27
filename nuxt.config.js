export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Digital-Square',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/vendor/bootstrap-icons/bootstrap-icons.css',
    'assets/css/vendor/bootstrap/css/bootstrap.min.css',
    'assets/css/vendor/swiper/swiper-bundle.min.css',
    'assets/css/style.css'
  ],
  script: [
    {src:'assets/css/vendor/aos/aos.js'},
    {src:'assets/css/vendor/bootstrap/js/bootstrap.js'},
    {src:'assets/css/vendor/bootstrap/js/bootstrap.bundle.js'},
    {src:'assets/css/vendor/bootstrap/js/bootstrap.esm.js'},
    {src:'assets/css/vendor/isotope/isotope.pkgd.min.js'},
/*
    {src:'assets/main.js'},
*/
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    i18n: {
      locales: [{code: 'en', file: 'lang.js'}, {code: 'fr', file: 'lang.js'}],
      defaultLocale: 'fr',
      lazy: true,
      langDir: 'locales/',
      vueI18n: {
        fallbackLocale: 'fr',
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
