<script lang="ts">
	import List from '$lib/components/list.svelte';
	import type { Todo } from '$lib/models/types/todo';
	import { deleteById, fetchTodos } from '$lib/services';
	import { onMount } from 'svelte';

	let todos: Todo[] = [];

	onMount(async () => {
		todos = await fetchTodos();
	});

	async function deleteTodo(event: CustomEvent<{ id: string }>) {
		const answer = confirm('Are you sure you want to delete this todo?');
		const id = Number(event.detail.id);

		if (answer) {
			await deleteById(id);
			todos = todos.filter((todo) => todo.id !== id);
		}
	}
</script>

<List {todos} on:select={deleteTodo} />
