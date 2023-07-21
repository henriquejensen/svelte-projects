import type { Todo } from "$lib/models/types/todo";

const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(URL_TODOS);
  const data = await res.json() as Todo[];
  return data;
}

export async function deleteById(id: number): Promise<void> {
  await fetch(`${URL_TODOS}/${id}`, { method: 'DELETE' });
}