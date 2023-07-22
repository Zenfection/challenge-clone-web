<script setup lang="ts">
	const props = defineProps({
		title: String,
		features: Array
	});
</script>

<template>
	<div class="flex h-[17rem] w-[13rem] flex-col items-center justify-start gap-8">
		<div class="self-stretch text-2xl font-semibold text-white">{{ props.title }}</div>
		<div v-for="feature in props.features" :key="feature as any" class="self-stretch text-lg font-medium text-white">{{ feature }}</div>
	</div>
</template>
