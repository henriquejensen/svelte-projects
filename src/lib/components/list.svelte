<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import { todo } from '../../stores';
	import TodoComponent from './todo.svelte';

	let todos: Todo[] = [];
	todo.data.subscribe((t) => (todos = t));
</script>

<ul>
	{#each todos as todo}
		<TodoComponent {todo} on:select />
	{/each}
</ul>
