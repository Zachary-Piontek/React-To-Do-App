import { useContext, useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { userAuth } from '../services/auth';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to='/todos' />;
  } 
  
  const submitAuth = async (e) => {
    e.preventDefault();
    const response = await userAuth(email, password, type);
    setUser(response);
    setEmail('');
    setPassword('');
  };
  

  return (
    <>
      <div className='auth-page'>
        <NavLink id='sign-in' to='/auth/sign-in'>Sign In</NavLink>
        <NavLink id='sign-up' to='/auth/sign-up'>Sign Up</NavLink>
        <form onSubmit={submitAuth}>
          <label>
            <input className="input" type='text' placeholder='your email' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </label>
          <label>
            <input className="input" type='password' placeholder='password' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </label>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    </>
  );
}
