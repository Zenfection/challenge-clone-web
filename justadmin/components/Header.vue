<script lang="ts" setup></script>

<template>
	<header class="flex items-center justify-between px-28 py-8">
		<HeaderLogo />
		<HeaderNavBar />
		<div class="flex items-center justify-start gap-6">
			<div class="btn bg-color-primary hover:bg-color-primary-hover focus:bg-color-error-focus">
				<a class="font-semibold text-white" href="#">Sign in</a>
			</div>
			<div class="btn border-2 border-color-primary/50">
				<a class="font-semibold text-color-primary" href="#">Request Demo</a>
			</div>
		</div>
	</header>
</template>
