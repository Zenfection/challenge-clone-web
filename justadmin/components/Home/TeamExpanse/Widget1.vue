<template>
	<div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-8">
		<div class="col-span-2 row-span-3">
			<div class="rounded-lg border-2 border-neutral-600/10 bg-white p-6 shadow-lg">
				<div class="flex flex-col items-start justify-start gap-10">
					<h6 class="text-xl font-semibold text-neutral-900">Total expanse</h6>
					<div class="h-full w-full object-cover">
						<img class="h-full w-full object-cover" src="~/assets/img/chart.png" alt="Chart Image" />
					</div>
				</div>
			</div>
		</div>
		<div class="row-span-2">
			<div class="flex flex-col items-center gap-3 rounded-lg border-2 border-neutral-600/10 bg-white px-8 py-4 shadow-lg">
				<img class="h-24 w-24" src="~/assets/img/money_bag.png" alt="Money Bag Image" />
				<span class="text-2xl font-semibold tracking-wide">$10,000</span>
				<span class="text-sm tracking-wide text-neutral-700/50">Total budget saved</span>
			</div>
		</div>
		<div class="col-span-1 row-span-1">
			<div class="w-auto rounded-lg border-2 border-neutral-600/10 bg-white px-4 py-3 shadow-lg">
				<div class="ml-3 flex flex-wrap">
					<img class="inline-block h-14 w-auto rounded-full" src="~/assets/img/avatar/avatar1.png" alt="" />
					<img class="-ml-5 inline-block h-14 w-auto rounded-full" src="~/assets/img/avatar/avatar2.png" alt="" />
					<img class="-ml-5 inline-block h-14 w-auto rounded-full" src="~/assets/img/avatar/avatar3.png" alt="" />
					<img class="-ml-5 inline-block h-14 w-auto rounded-full" src="~/assets/img/avatar/avatar4.png" alt="" />
				</div>
			</div>
		</div>
		<div class="">
			<div class="rounded-lg border-2 border-neutral-600/10 bg-white shadow-lg">
				<img class="h-32 w-52 object-none" src="~/assets/icons/chart_example.svg" alt="Chart Image" />
			</div>
		</div>
		<div class="col-span-2">
			<div class="rounded-lg border-2 border-neutral-600/10 bg-white p-6 shadow-lg">
				<div class="flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<h6 class="text-xl font-semibold text-neutral-900">Total earning</h6>
						<img src="~/assets/icons/card-send.svg" alt="Card Send" />
					</div>
					<h4 class="text-3xl font-semibold text-neutral-900">$22.800.50</h4>
				</div>
			</div>
		</div>
	</div>
</template>
