<script lang="ts" setup>
	const team = [
		{
			avatar: "../../assets/img/team/user1.png",
			job: "Self-employeed",
			desc: "Flexible and clear benefits you can run by yourself."
		},
		{
			avatar: "../../assets/img/team/user2.png",
			job: "Small Business",
			desc: "Empower your team with benefits thats show you are."
		},
		{
			avatar: "../../assets/img/team/user3.png",
			job: "Startups",
			desc: "Bring order to team expanses. Bring an end to messy finances"
		}
	];
</script>

<template>
	<div class="bg-gradient-to-b from-indigo-700 to-blue-700 p-14">
		<h1 class="inline-block rounded-lg bg-white/10 p-4 text-lg font-semibold uppercase leading-6 text-white">For Who ?</h1>
		<div class="mt-6 flex items-center justify-between gap-8">
			<h1 class="line-clamp-2 w-2/5 text-5xl font-semibold leading-tight text-white">Whatever your size, we’re the right fit</h1>
			<div class="flex flex-col justify-start gap-5">
				<p class="line-clamp-2 w-10/12 text-lg font-normal leading-6 text-neutral-300/80">
					More than 30,000 entrepreneurs in more than 600 cities in Indonesia have used Just Admin
				</p>
				<span class="text-lg font-bold text-white">See more</span>
			</div>
		</div>
		<div class="mt-14 grid grid-flow-row grid-cols-3">
			<div v-for="user in team" :key="user as any">
				<div class="mx-14 flex flex-col items-center justify-start gap-8 pt-6" :class="user.job == 'Small Business' ? 'bg-white/10' : ''">
					<!-- <div :class="user.job == 'Small Business' ? 'bg-white/10' : ''"> -->
					<img class="object-contain" :src="user.avatar" :alt="user.job" />
					<div class="flex flex-col items-center justify-start gap-4 pb-6">
						<h4 class="text-center text-3xl font-semibold text-white">{{ user.job }}</h4>
						<h6 class="line-clamp-2 w-8/12 text-center text-lg font-normal text-neutral-100/50">{{ user.desc }}</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
