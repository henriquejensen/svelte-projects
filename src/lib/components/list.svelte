<script lang="ts">
	import type { Todo } from '$lib/models/types/todo';
	import TodoComponent from './todo.svelte';

	export let todos: Todo[] = [];
</script>

<section>
	<h1 class="font-bold text-4xl text-center">#todo</h1>
	<p>Total: {todos.length}</p>

	<ul>
		{#each todos as todo}
			<TodoComponent {todo} on:select />
		{/each}
	</ul>
</section>
