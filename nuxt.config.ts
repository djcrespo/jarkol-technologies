// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/'
        }
    },
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n'
    ],
    css:[
        '~/assets/css/app.css'
    ],
    colorMode:{
        preference: 'white', // default value of $colorMode.preference
        fallback: 'white', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    },
    postcss:{
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    plugins: [
        '~/plugins/axios.ts'
    ],
    i18n: {
        // Module Options
    }
})
