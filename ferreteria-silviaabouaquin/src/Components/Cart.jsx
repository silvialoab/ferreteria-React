import React, {useContext} from 'react'
import { Context } from './context/CartContext'


const Cart = () => {
    const {cart, total, remove, clear} = useContext(Context)

    if (cart.length===0) {
        return(
            <p>
                No hay elementos agregados al carrito
            </p>
        )
    }

    return(
        <>
            {cart.map((item)=>
                <div>
                    <h3>Id: {item.id} - Descripcion: {item.descripcion}</h3>
                    <h4>Precio: {item.precio} </h4>
                    <h5>Cantidad: {item.cantidad} </h5>
                    <h5>Subtotal: {item.subTotal} </h5>
                    <button onClick={()=>remove(item.id, item.cantidad, item.precio)}>Eliminar producto</button>
                </div>
            )}
            <h2>Total carrito: {total}</h2>
            <button onClick={()=>clear()}>Limpiar Carrito</button>
        </>
    );
}

export default Cart;