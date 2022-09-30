import { useEffect, useState } from 'react';
import { getTodos } from '../services/todo';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userTodoList = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (e) {
        console.error(e);
      }
    };

    userTodoList();
  }, []);

  return { todos, setTodos };
}