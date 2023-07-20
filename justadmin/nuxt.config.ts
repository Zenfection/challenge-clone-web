// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Archivo: true,
					download: true,
					inject: true
				}
			}
		],
		"nuxt-icon",
		"@nuxtjs/tailwindcss",
		[
			"@nuxtjs/color-mode",
			{
				preference: "system",
				fallback: "light"
			}
		],
		[
			"nuxt-typed-router",
			{
				// ? https://nuxt-typed-router.vercel.app
			}
		]
		// [
		//   '@pinia/nuxt',
		//   {
		//     // ? https://pinia.vuejs.org/ssr/nuxt.html
		//     autoImports: ['defineStore']
		//   }
		// ]
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
	]
});
