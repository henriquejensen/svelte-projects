<script lang="ts">
	import List from '$lib/components/list.svelte';
	import { onMount } from 'svelte';
	import { todo } from '../../stores';

	onMount(todo.filterCompleted);
</script>

<List />
