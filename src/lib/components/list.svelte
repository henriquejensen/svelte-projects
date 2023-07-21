<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import { todos } from '../../stores';
	import TodoComponent from './todo.svelte';

	let allTodos: Todo[] = [];

	todos.subscribe((value) => (allTodos = value.data));
</script>

<ul>
	{#each allTodos as todo}
		<TodoComponent {todo} on:select />
	{/each}
</ul>
