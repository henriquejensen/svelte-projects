import { writable } from 'svelte/store';

type TodoStore = {
  data: Todo[];
  loading: boolean;
  original: Todo[];
};

export const todos = writable<TodoStore>({
  data: [],
  loading: false,
  original: [],
});
