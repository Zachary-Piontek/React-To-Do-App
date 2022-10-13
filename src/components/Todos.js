import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useTodos } from '../hooks/useTodos';
import { signOut } from '../services/auth.js';
import { createTodo } from '../services/todo';


export default function Todos() {
  const [description, setDescription] = useState('');
  const { todos, setTodos } = useTodos();
  const { user, setUser } = useContext(UserContext);
  

  if (!user) { 
    return <Redirect to='/auth/sign-in' />;
  }

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

  const signOutTodo = async () => {
    signOut();
    setUser(null);
  };

  return (
    <>
      <div>
        <button onClick={signOutTodo}>Sign Out</button>
      </div>
      <div className='todo-page'>
        <div>
          <input type='text'
            value={description}
            onChange={e => setDescription(e.target.value)}/>
          <button onClick={handleAddedTodo}>New Todo</button>
        </div>
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
