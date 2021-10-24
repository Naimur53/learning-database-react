import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li> <NavLink to="/home">home</NavLink></li>
          <li> <NavLink to="/home/products">Products</NavLink></li>
          <li> <NavLink to="/home/AddProduct">add product</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path='/home/products'>
            <Products></Products>
          </Route>
          <Route path='/home/AddProduct'>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
