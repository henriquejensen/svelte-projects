<script lang="ts">
	import List from '$lib/components/list.svelte';
	import type { Todo } from '$lib/models/types/todo';
	import { deleteById, fetchTodos } from '$lib/services';
	import { onMount } from 'svelte';

	let activeTodos: Todo[] = [];

	onMount(async () => {
		activeTodos = filteredActive(await fetchTodos());
	});

	function filteredActive(todos: Todo[]) {
		return todos.filter((todo) => !todo.completed);
	}
</script>

<List todos={activeTodos} />
