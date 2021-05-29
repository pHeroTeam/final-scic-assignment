import React,{ createContext, useState } from 'react';
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
import Footer from './components/Footer/Footer';

import Login from './components/Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <Route path="/login" exact>
          <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
