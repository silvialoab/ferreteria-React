import ItemCount from "./ItemCount"


const ItemDetail = ({descripcion, precio, stock, imagen}) => {
    return (
        <div className='itemD'>
            <h2>Articulo: {descripcion}</h2>
            <p>Stock Actual: {stock} </p>
            <p>${precio}</p>
            <img style={{width:"30%"}} src={imagen} alt={descripcion} />                <ItemCount stock={stock} />
        </div>
        
    )

}

export default ItemDetail