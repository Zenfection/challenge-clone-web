<script setup lang="ts">
	const props = defineProps<{
		slogan: string;
		title: string;
		description: string;
		button: string;
	}>();
</script>

<template>
	<div class="flex flex-col justify-start gap-6">
		<div class="mb-6">
			<span class="rounded-lg bg-blue-400/10 p-5 text-sm font-semibold uppercase leading-8 tracking-wider text-blue-700 shadow-lg">{{ props.slogan }}</span>
		</div>
		<h2 class="line-clamp-2 w-9/12 text-5xl font-semibold leading-tight tracking-wider">{{ props.title }}</h2>
		<p class="line-clamp-2 w-11/12 text-xl font-normal text-neutral-700/50">
			{{ props.description }}
		</p>
		<div class="mt-6">
			<a href="#" class="rounded-lg border-2 border-color-primary px-8 py-4 text-xl font-semibold text-color-primary/80 shadow-lg">{{ props.button }}</a>
		</div>
	</div>
</template>
