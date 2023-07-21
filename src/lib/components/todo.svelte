<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import { createEventDispatcher } from 'svelte';
	import trash from '$lib/assets/icons/trash.svg';

	export let todo: Todo;

	const dispatch = createEventDispatcher();

	function selectById() {
		dispatch('select', { id: todo.id });
	}
</script>

<section class="flex justify-between my-4">
	<div class="flex gap-1 items-center flex-[3]">
		<input
			class="cursor-pointer"
			type="checkbox"
			bind:checked={todo.completed}
			id={todo.id.toString()}
		/>
		<label
			for={todo.id.toString()}
			class={`cursor-pointer ${todo.completed ? 'line-through' : 'font-bold'}`}>{todo.title}</label
		>
	</div>

	<button
		on:click={selectById}
		class="w-8 text-end hover:border-red-500 hover:border-dashed hover:border-2"
	>
		<img src={trash} class="w-full" alt="trash" />
	</button>
</section>
