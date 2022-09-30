
import { Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import './components/auth.css';

function App() {
  return (
    <div className="App">
      <Route path='/auth/:type' component={Auth} />
    </div>
  );
}

export default App;
