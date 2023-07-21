<script setup lang="ts">
	const companies = [
		{
			src: "../../assets/icons/company/Netskope.svg",
			alt: "NetSkope Company"
		},
		{
			src: "../../assets/icons/company/Toyota.svg",
			alt: "Toyota Company"
		},
		{
			src: "../../assets/icons/company/AirBnB.svg",
			alt: "AirBnB Company"
		},
		{
			src: "../../assets/icons/company/CaptainOne.svg",
			alt: "CaptainOne Company"
		},
		{
			src: "../../assets/icons/company/Spotify.svg",
			alt: "Spotify Company"
		}
	];
</script>

<template>
	<div class="mt-10 flex items-center justify-center gap-6">
		<div class="w-1/4">
			<h4 class="text-3xl font-semibold leading-tight tracking-wide text-neutral-900">Trust Companies</h4>
			<h6 class="mt-4 text-xl font-normal text-neutral-700/50">Our best partners who have worked for 5+ years and using this apps</h6>
		</div>
		<div class="flex items-center justify-start gap-8">
			<div v-for="company in companies" :key="company as any">
				<img :src="company.src" :alt="company.alt" />
			</div>
		</div>
	</div>
</template>
