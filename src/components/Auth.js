import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../hooks/userContext';
import { userAuth } from '../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);
  const { type } = useParams();
  
  const submitAuth = async () => {
    const response = await userAuth(email, password, type);
    setUser(response);
    setEmail('');
    setPassword('');
  };
  
  if (user) return <Redirect to='/todos' />;

  return (
    <>
      <div className='auth-page'>
        <NavLink id='sign-in' to='/auth/sign-in'>Sign In</NavLink>
        <NavLink id='sign-up' to='/auth/sign-up'>Sign Up</NavLink>
        <form onSubmit={submitAuth}>
          <label>
            <input type='text' name='email' value={email} placeholder='email' onChange={e => setEmail(e.target.value)}></input>
          </label>
          <label>
            <input type='text' name='password' value={password} placeholder='password' onChange={e => setPassword(e.target.value)}></input>
          </label>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    </>
  );
}