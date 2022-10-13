import { checkError, client } from './client';

export async function getTodos() {
  const response = await client
    .from('todos')
    .select();

  return checkError(response);
}

export async function createTodo(description) {
  const response = await client
    .from('todos')
    .insert({ description })
    .single();

  return checkError(response);
}