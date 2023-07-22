<template>
	<div class="h-[499px] w-auto bg-neutral-900 px-28 py-20">
		<div class="flex flex-col justify-center gap-14">
			<div class="flex items-center justify-between gap-8">
				<div class="flex flex-col items-start gap-6">
					<div class="inline-flex items-center justify-start gap-3">
						<img class="h-9 w-9" src="~/assets/icons/logo.svg" alt="Logo" />
						<span class="text-3xl font-bold text-white">Justadmin</span>
					</div>
					<div class="line-clamp-3 w-8/12 text-lg font-normal leading-tight text-neutral-100">
						The one-stop platform for all financial management of small and medium-sized businesses.
					</div>
					<div class="inline-flex items-center justify-start gap-4">
						<img src="~/assets/icons/social/facebook.svg" alt="facebook" />
						<img src="~/assets/icons/social/twitter.svg" alt="twitter" />
						<img src="~/assets/icons/social/youtube.svg" alt="youtube" />
						<img src="~/assets/icons/social/linkedin.svg" alt="linkedin" />
						<img src="~/assets/icons/social/instragram.svg" alt="instragram" />
					</div>
				</div>
				<div class="flex items-center gap-14">
					<FooterFeature :title="'Platform'" :features="['Why Justadmin', 'Expase management', 'Automate bookkeeping', 'Intergrations']" />
					<FooterFeature :title="'Solutions'" :features="['Self-employed', 'Small business', 'Startups', 'Other business']" />
					<FooterFeature :title="'Company'" :features="['About us', 'Customers', 'Careers', 'Contact us']" />
					<FooterFeature :title="'Resources'" :features="['Blog', 'FAQ', 'Help center']" />
				</div>
			</div>
			<div class="rounded-md bg-white/5 p-4 shadow-lg">
				<div class="flex items-center justify-between gap-4">
					<div class="w-8/12">
						<h6 class="line-clamp-1 text-lg font-semibold leading-tight text-white">2022 © Justadmin Corp.</h6>
					</div>
					<div class="flex items-center justify-start gap-5">
						<span class="text-gray-200">Privacy policy</span>
						<span class="text-gray-200">Terms of use</span>
						<span class="text-gray-200">Cookies</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
