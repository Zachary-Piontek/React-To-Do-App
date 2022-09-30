import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../hooks/userContext';
import { useTodos } from '../hooks/useTodos';
import { createTodo } from '../services/todo';


export default function Todos() {
  const [description, setDescription] = useState('');
  const { todos, setTodos } = useTodos();
  const { user } = useContext(UserContext);
  

  if (!user) return <Redirect to='/auth/sign-in' />;

  const handleAddedTodo = async () => {
    try {
      await createTodo(description);
      setTodos((currentTodo) => [...currentTodo, { description }]);
      setDescription('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <>
      <div className='todo-page'>
        <input 
          type='text' 
          placeholder='add todo' 
          value={description} 
          onChange={(e) => {setDescription(e.target.value);}} 
        />
        <button onClick={handleAddedTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map(todo => <h2 
          key={todo.id}>
          {todo.description}
        </h2>)}
      </div>     
    </>
  );
}
