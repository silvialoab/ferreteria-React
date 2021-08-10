import React from 'react';
import './cart.css'
import Producto from './Components/Producto';
const Cart = ({cart, setCart}) => {
    
    return (
        <div className='cart'>
            <h3>Carrito</h3>
            {cart.length === 0 ? (
                <p>0</p>
            ):(
                cart.map((producto) => (
                    <Producto 
                        codigo={producto.id}
                        producto={producto}
                        cart={cart}
                        setCart={setCart}
                    />
                ))
            )}
        </div>
    );
};
export default Cart;