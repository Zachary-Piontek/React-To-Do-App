
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import './components/auth.css';
import Todo from './components/Todos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='/todos' component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
