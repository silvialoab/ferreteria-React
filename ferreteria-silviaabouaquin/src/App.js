import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemList from './Components/ItemList';
import React from 'react';
import {CartFuncion} from './Components/context/CartContext';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartFuncion>
       <div className="App"  >
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <ItemListContainer titulo='Lo que buscas, y mas.....' />  
            </Route> 
            <Route path="/cart" exact>
              <Cart titulo='Carrito'/>  
            </Route> 
            <Route path="/:categoria/" exact>
              <ItemList titulo='Construccion' />  
            </Route>
            <Route path="/:categoria/:id" exact>
              <ItemDetailContainer titulo='Construccion' />  
            </Route> 
          </Switch>
        </div>
      </CartFuncion>
    </BrowserRouter>
  );
}

export default App;