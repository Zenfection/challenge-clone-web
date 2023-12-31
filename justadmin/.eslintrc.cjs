module.exports = {
	root: true,
	env: {
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:tailwindcss/recommended",
		"@nuxtjs/eslint-config-typescript",
		"prettier"
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module"
	},
	plugins: ["vue", "@typescript-eslint", "tailwindcss"],
	rules: {
		/* typescript */
		"dot-notation": "off",
		"no-restricted-imports": [
			"error",
			{
				patterns: [
					"../*",
					"~/*",
					"~~/*",
					"./assets/*",
					"./components/*",
					"./pages/*",
					"./plugins/*",
					"./router/*",
					"./composables/*",
					"./server/*",
					"./store/*",
					"./types/*",
					"./utils/*",
					"./libs/*",
					"./*.vue"
				]
			}
		],
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
				pathGroups: [
					{
						pattern: "{vue,vue-router,vite,@vitejs/plugin-vue}",
						group: "builtin",
						position: "before"
					},
					{
						pattern: "@src/**",
						group: "parent",
						position: "before"
					}
				],
				pathGroupsExcludedImportTypes: ["builtin"],
				alphabetize: {
					order: "asc"
				},
				"newlines-between": "always"
			}
		],
		"@typescript-eslint/consistent-type-imports": ["error", {prefer: "type-imports"}],

		/* nuxt */
		"vue/multi-word-component-names": "off",
		"vue/require-v-for-key": "off",
		"vue/no-multiple-template-root": "off",

		/* tailwindcss */
		"tailwindcss/no-custom-classname": [
			"warn",
			{
				config: "tailwind.config.ts"
			}
		],
		"tailwindcss/classnames-order": "off"
	}
};
