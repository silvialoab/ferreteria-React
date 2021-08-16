//import logo from './logo.svg';
import React, { Fragment, useState } from "react";
import './App.css';
import NavBar from './Components/NavBar'
import Producto from './Components/Producto';
import Cart from './Components/Cart';

function App() {
  //Estado de mis productos
  const [productos, setProductos] = useState([
    { id: 1, descripcion: 'Balde de Albañil', precio: 500, stock: 24 },
    { id: 2, descripcion: 'Fratacho Plastico', precio: 500, stock: 30 },
    { id: 3, descripcion: 'Caja de chapa', precio: 200 , stock: 40 },
    { id: 4, descripcion: 'Latex interior', precio: 2500 , stock: 5 },
    { id: 5, descripcion: 'Llave exterior', precio: 150 , stock: 36},
    { id: 6, descripcion: 'Cable bipolar', precio: 5000, stock: 10 }
  ])

  //estado del carrito
  const [cart, setCart] = useState([])

  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', backgroundColor:'cadetblue'}}>
        <h1 >LOPEZ      mayorista ferretero</h1>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh', backgroundColor:'cadetblue'}}>
        <NavBar></NavBar>
      </div>
      <div style={{height: '180vh', backgroundColor:'cadetblue'}}>
        <Fragment>
          <h2> PRODUCTOS</h2>
          {productos.map((producto) => (
              <Producto
              key={producto.id}  
              producto={producto}
              cart={cart}
              setCart={setCart}
              productos={productos}
              StockInitial={producto.stock}
              />
          ))}
          <Cart
          cart = {cart}
          />
        </Fragment>

      </div>
    </>
  );
}

export default App;
