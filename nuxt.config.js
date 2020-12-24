export default {
    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'HD Foundation Lumecolors',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['@assets/main.scss', '@assets/landing.styl'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
      { src: '~/plugins/bootstrap' },
      { src: '~/plugins/youtube', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        'nuxtjs-mdi-font'
        // https://go.nuxtjs.dev/stylelint
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/composition-api',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        ['vue-scrollto/nuxt', { duration: 1000 }],
        'nuxt-lazy-load'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        // parallel: true,
        cache: false,
        sourceMap: false,
        cssSourceMap: false,
        extractCSS: true,
        extractComments: {
            filename: 'LICENSES'
        },
        terserOptions: {
            output: {
                comments: /^\**!|@preserve|@license|@cc_on/
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'async'
            }
        },
        splitChunks: {
            pages: false,
            vendor: true,
            commons: false,
            runtime: true,
            layouts: false
        },
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
            }
        }
    }
}
