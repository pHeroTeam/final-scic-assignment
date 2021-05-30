import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import NoMatch from './components/NoMatch/NoMatch';
import SideBarAndOrder from './components/Dashboard/AllOrder/SideBarAndOrder';
import ShowAllOrder from './components/Dashboard/AllOrder/ShowAllOrder';
import UserOrder from './components/Dashboard/UserOrder/UserOrder';
import AddFoodFrom from './components/Dashboard/AddFoodFrom/AddFoodFrom';
import Review from './components/Dashboard/Review/Review';
import Update from './components/Dashboard/Update/Update';
import ManageFood from './components/Dashboard/ManageFood/ManageFood';

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
        <Route path="/contact" exact>
          <Contact></Contact>
        </Route>
        <Route path="/dashboard" exact>
          <SideBarAndOrder></SideBarAndOrder>
        </Route>
        <Route path="/allOrders" exact>
          <ShowAllOrder></ShowAllOrder>
        </Route>
        <Route path="/yourOrder" exact>
          <UserOrder></UserOrder>
        </Route>
        <Route path="/addNewFoods" exact>
          <AddFoodFrom></AddFoodFrom>
        </Route>
        <Route path="/manageFood" exact>
          <ManageFood></ManageFood>
        </Route>
        <Route path="/review" exact>
          <Review></Review>
        </Route>
        <Route path="/updateFood" exact>
          <Update></Update>
        </Route>
        <Route path="*" exact>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
