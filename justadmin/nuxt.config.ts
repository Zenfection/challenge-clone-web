// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 8080, // ? default 3000
  },
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/color-mode', {}],
    [
      'nuxt-typed-router',
      {
        // ? https://nuxt-typed-router.vercel.app
      },
    ],
    [
      '@pinia/nuxt',
      {
        // ? https://pinia.vuejs.org/ssr/nuxt.html
        autoImports: ['defineStore'],
      },
    ],
    // [
    //   '@pinia-plugin-persistedstate/nuxt',
    //   {
    //     // ? https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    //     cookieOptions: {
    //       sameSite: 'strict',
    //     },
    //     storage: 'cookies',
    //   },
    // ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
