<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { todo } from '../stores';
	import '../app.css';
	import { links } from '$lib/contants';

	const { get, addNewTodo } = todo;
	let newTodo = '';

	onMount(async () => await get());

	function handleAddNewTodo() {
		addNewTodo(newTodo);
		newTodo = '';
	}
</script>

<section class="px-8 pt-8 max-w-2xl m-auto">
	<h1 class="font-bold text-4xl text-center">#todo</h1>
	<div>
		<nav class="py-6 border-b-2 border-gray-400 border-solid">
			<ul class="flex gap-3 justify-between">
				{#each links as link}
					<li class="focus:border-solid focus:border-2">
						<a
							href={link.href}
							class={`${$page.url.pathname === link.href ? 'text-red-400 font-bold' : 'text-gray'}`}
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<form class="flex gap-3 mt-4" on:submit|preventDefault={handleAddNewTodo}>
			<input
				type="text"
				placeholder="Add new todo"
				class="w-full border-2 border-solid border-gray-400 rounded-lg p-2"
				bind:value={newTodo}
			/>
			<button class="bg-blue-400 text-white rounded-lg px-4 py-2">Add</button>
		</form>

		<slot />
	</div>
</section>

<style lang="postcss">
	h1 {
		font-family: 'Raleway', sans-serif;
	}
</style>
