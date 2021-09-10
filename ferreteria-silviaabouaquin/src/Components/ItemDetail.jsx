import React, {useState, useContext} from "react"
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount"
import { Context } from "./context/CartContext"


const ItemDetail = ({id, descripcion, precio, stock, imagen}) => {
    const [compra, setCompra] = useState(false)
    const {onAdd} = useContext(Context)

    const agregar = (cantidad) => {
        setCompra(true)
        console.log(cantidad)
        onAdd({id, descripcion, precio}, cantidad)
        console.log({id})
        console.log(`agregaste ${cantidad} al carrito`)
    }
    return (
        <div className='itemD'>
            <h2>Articulo: {descripcion}</h2>
            <p>Stock Actual: {stock} </p>
            <p>${precio}</p>
            <img style={{width:"30%"}} src={imagen} alt={descripcion} />   
            {!compra ? <ItemCount stock={stock} agregar={agregar} /> : <Link to="/cart"><button>Finalizar Compra</button></Link>}
        </div>
        
    )

}

export default ItemDetail
