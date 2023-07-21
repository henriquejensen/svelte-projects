<script lang="ts">
	import List from '$lib/components/list.svelte';
	import { onMount } from 'svelte';
	import { todos } from '../stores';

	onMount(async () => todos.update((t) => ({ ...t, data: t.original })));
</script>

<List />
