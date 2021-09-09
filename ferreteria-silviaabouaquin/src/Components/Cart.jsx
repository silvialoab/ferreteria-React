import React, {useContext} from 'react'
import { Context } from './context/CartContext'


const Cart = () => {
    const {cart} = useContext(Context)

    return(
        <>
            {cart.length>0?cart.map((item)=>
                <div>
                    Descripcion: {item.descripcion},
                    Precio: {item.precio},
                    Subtotal: {item.subTotal}
                    Cantidad: {item.count}
                </div>):
                <div>
                    El carrito esta vacio
                </div>}
        </>
    );
}

export default Cart;