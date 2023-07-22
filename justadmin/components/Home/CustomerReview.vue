<script setup lang="ts">
	const reviews = [
		{
			comment: "“We can easily link every transaction to our bills. It’s easy for everybody, we are saving a lot of time when it comes to finance.“",
			avatar: "../../assets/img/customer/customer1.png",
			name: "Leonard Awkard, CEO of Tumbas.co"
		},
		{
			comment: "“I choose Justadmin for ease of use, as a Freelance designer, I like running all my finances from one simple interface.“",
			avatar: "../../assets/img/customer/customer2.png",
			name: "Hinata Hyuga, Freelance designer"
		},
		{
			comment: "“Justadmin is 100% aligned with what we do: a straightforward service, a customer oriented interface and fast response CS.“",
			avatar: "../../assets/img/customer/customer3.png",
			name: "Nezuko Kamado, Consultant"
		}
	];
</script>
<template>
	<div class="px-28 py-20">
		<div class="flex flex-col items-center gap-6">
			<div class="inline-block rounded-md bg-blue-600/10 p-4">
				<div class="text-lg font-semibold uppercase text-blue-600">TESTIMONIALS</div>
			</div>
			<div class="text-center text-5xl font-semibold leading-tight text-neutral-900">What our customer <br />say it best.</div>
		</div>
		<div class="mt-8 flex items-center justify-between gap-8">
			<div class="flex shrink flex-col gap-8">
				<div class="line-clamp-3 w-10/12 text-3xl font-semibold leading-tight text-zinc-900">
					"This is one of the best dashboards i’ve tried so far. Powerful and easy to use, you guys should try it. Don’t miss it and the customer service are easy to call.”
				</div>
				<div class="line-clamp-1 text-2xl font-semibold text-zinc-900">Rorona Zoro, CEO of Wanokuni Corp.</div>
			</div>
			<div class="relative flex-none">
				<img class="" src="~/assets/img/customer.png" alt="Customer Image" />
				<div class="absolute bottom-0 -z-10 h-1/3 w-full bg-gradient-to-b from-indigo-700 to-blue-700"></div>
			</div>
		</div>
		<div class="mt-14 grid grid-cols-3 gap-8">
			<div v-for="review in reviews" :key="review as any" class="rounded-lg bg-white/30 p-6 shadow-lg">
				<div class="flex flex-col justify-start gap-5">
					<h6 class="line-clamp-3 text-lg font-normal leading-relaxed text-black">{{ review.comment }}</h6>
					<div class="flex items-center gap-4">
						<img class="h-12 w-12 rounded-full" :src="review.avatar" :alt="review.name" />
						<span class="text-base font-semibold leading-normal text-zinc-900">{{ review.name }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6 flex flex-col items-center">
			<div class="rounded-lg border border-blue-600 px-8 py-4 shadow-lg">
				<div class="text-base font-semibold text-blue-600">See all testimonal</div>
			</div>
		</div>
	</div>
</template>
