<script setup lang="ts">
	const invoices = [
		{
			title: "Clinton Mclure",
			subtitle: "Invoices project Tabanaha"
		},
		{
			title: "Janneta Romlo",
			subtitle: "Invoice employee Kantor"
		}
	];

	const activities = [
		{
			avatar: "../../assets/img/avatar_activities/avatar1.png",
			name: "Haruno Sakura",
			lastOnline: "15 minutes ago"
		},
		{
			avatar: "../../assets/img/avatar_activities/avatar2.png",
			name: "Yamanaka Ino",
			lastOnline: "24 minutes ago"
		},
		{
			avatar: "../../assets/img/avatar_activities/avatar3.png",
			name: "Uchiha Itachi",
			lastOnline: "24 minutes ago"
		}
	];
</script>

<template>
	<div class="relative mx-24">
		<img class="h-auto w-[28rem] rounded-2xl shadow-xl" src="~/assets/img/woman_working.png" alt="Woman Working Image" />
		<div class="absolute -right-24 top-1/3 flex w-7/12 flex-col gap-4 rounded-lg border-2 border-neutral-700/10 bg-white p-4 shadow-lg">
			<div class="border-b-2 border-b-neutral-600/10">
				<span class="text-xl font-semibold text-neutral-900">Invoices</span>
			</div>
			<div v-for="invoice in invoices" :key="invoice as any">
				<div class="flex items-center justify-between gap-2">
					<div class="rounded-lg bg-blue-600 p-3 shadow-md">
						<img src="~/assets/icons/paper-download.svg" alt="Paper Download" />
					</div>
					<div class="flex flex-col gap-1">
						<span class="">{{ invoice.title }}</span>
						<span class="line-clamp-1 text-sm font-normal text-neutral-600/50">{{ invoice.subtitle }}</span>
					</div>
					<div>
						<img class="h-6 w-6" src="~/assets/icons/download.svg" alt="Download Icon" />
					</div>
				</div>
			</div>
		</div>

		<div class="absolute -left-24 top-2/4 flex w-5/12 flex-col gap-4 rounded-lg border-2 border-neutral-700/10 bg-white p-4 shadow-lg">
			<div class="">
				<span class="text-xl font-semibold text-neutral-900">Activity</span>
			</div>
			<div v-for="activity in activities" :key="activity as any" class="border-b-2 border-b-neutral-700/10 pb-2">
				<div class="flex items-center justify-between gap-2">
					<div class="overflow-hidden rounded-full shadow-lg">
						<img class="h-12 w-12 object-cover" :src="activity.avatar" :alt="`Avatar ${activity.name}`" />
					</div>
					<div class="flex flex-col gap-1">
						<span class="text-sm font-semibold text-neutral-900">{{ activity.name }}</span>
						<span class="line-clamp-1 text-sm font-normal text-neutral-700/50">{{ activity.lastOnline }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute -left-7 top-16">
			<img class="h-14 w-14 rounded-full border-2 border-neutral-300 object-cover shadow-lg" src="~/assets/img/avatar_activities/avatar4.png" alt="Avatar 4" />
		</div>
		<div class="absolute -right-7 bottom-16">
			<img class="h-14 w-14 rounded-full border-2 border-neutral-300 object-cover shadow-lg" src="~/assets/img/avatar_activities/avatar5.png" alt="Avatar 5" />
		</div>
	</div>
</template>
