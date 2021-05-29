import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/about" exact>
          <About></About>
        </Route>
        <Route path="/contact" exact>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
