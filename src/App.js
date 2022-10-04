
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import './components/auth.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='/todos' component={Todos} />
        <Route path = '*'>
          <Redirect to='/auth/sign-up'></Redirect>
        </Route>
        <Redirect to='/auth/sign-up' />
      </Switch>
    </div>
  );
}

export default App;
