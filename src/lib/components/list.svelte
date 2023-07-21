<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import TodoComponent from './todo.svelte';

	export let todos: Todo[] = [];
</script>

<ul>
	{#each todos as todo}
		<TodoComponent {todo} on:select />
	{/each}
</ul>
