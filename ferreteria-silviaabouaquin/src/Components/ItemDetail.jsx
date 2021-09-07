import React, {useState} from "react"
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount"


const ItemDetail = ({descripcion, precio, stock, imagen}) => {
    const [cant, setCant] = useState(0)
    const [compra, setCompra] = useState(false)

    const onAdd = (props) => {
        setCant(props.count)
        setCompra(true)
        console.log(`agregaste ${props.count} al carrito`)
    }
    return (
        <div className='itemD'>
            <h2>Articulo: {descripcion}</h2>
            <p>Stock Actual: {stock} </p>
            <p>${precio}</p>
            <img style={{width:"30%"}} src={imagen} alt={descripcion} />   
            {!compra ? <ItemCount stock={stock} onAdd={onAdd} /> : <Link to="/cart"><button>Finalizar Compra</button></Link>}
        </div>
        
    )

}

export default ItemDetail