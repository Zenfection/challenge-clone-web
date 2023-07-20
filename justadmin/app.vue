<template>
	<div data-theme="light">
		<NuxtPage />
	</div>
</template>

<style>
	* {
		font-family:
			"Archivo",
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			"Helvetica Neue",
			Arial,
			"Noto Sans",
			sans-serif,
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji";
	}

	.btn {
		@apply gap-2 rounded-md px-8 py-3 shadow-lg;
	}

	.btn a {
		@apply inline-block;
	}
</style>
