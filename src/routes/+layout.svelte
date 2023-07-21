<script>
	import '../app.css';

	const links = [
		{
			name: 'All',
			href: '/'
		},
		{
			name: 'Active',
			href: '/active'
		},
		{
			name: 'Completed',
			href: '/completed'
		}
	];
</script>

<section class="m-8">
	<h1 class="font-bold text-4xl text-center">#todo</h1>
	<div>
		<nav class="py-6 border-b-2 border-gray-400 border-solid">
			<ul class="flex gap-3 justify-between">
				{#each links as link}
					<li class="focus:border-solid focus:border-2">
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
		<slot />
	</div>
</section>

<style lang="postcss">
	h1 {
		font-family: 'Raleway', sans-serif;
	}
</style>
