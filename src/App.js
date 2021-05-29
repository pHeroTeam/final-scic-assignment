import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
