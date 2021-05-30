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
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

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
        <Route path="/checkout/:name/:price" exact>
          <Checkout></Checkout>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
