import { writable } from 'svelte/store';
import { fetchTodos } from '../lib/services';

function createTodo() {
  const loading = writable(false)
	let original = []
	const data = writable<Todo[]>([])

  async function get() {
		try {
      const response = await fetchTodos();
      data.set(response)
      original = response
		} catch(e) {
			console.error(e)
		}
	}

	return {
    get,
    data,
    loading,
    reset: () => data.set(original),
		getCompled: () => data.set(original.filter((x) => x.completed)),
		filterCompleted: () => data.set(original.filter((x) => !x.completed)),
	};
}

export const todo = createTodo()