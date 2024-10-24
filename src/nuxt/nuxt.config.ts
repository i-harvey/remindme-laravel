// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern'
                }
            }
        }
    },
    modules: ['shadcn-nuxt', '@nuxt/fonts', '@nuxtjs/tailwindcss'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    }
})
