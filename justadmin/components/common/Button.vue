<script lang="ts" setup>
	// create props: link, color and size
	const props = defineProps({
		link: {
			type: String,
			default: "#"
		},
		size: {
			type: String,
			default: ""
		},
		classes: {
			type: String,
			default: ""
		}
	});
</script>
<template>
	<div :class="props.classes" class="btn">
		<a :href="props.link">
			<slot />
		</a>
	</div>
</template>
