<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import { createEventDispatcher } from 'svelte';

	export let todo: Todo;

	const dispatch = createEventDispatcher();

	function selectById() {
		dispatch('select', { id: todo.id });
	}
</script>

<section>
	<h1>#todo</h1>
	<p>{todo.title}</p>
	<button on:click={selectById}>Delete</button>
</section>
