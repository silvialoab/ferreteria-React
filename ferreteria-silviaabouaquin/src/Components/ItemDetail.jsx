import ItemCount from "./ItemCount"


const ItemDetail = ({descripcion, precio, stock, imagen}) => {
    return (
        <div className='item'>
            <h2>Componente Detail</h2>
            <ul>
                <li>{descripcion}</li>
                <li>Stock Actual: {stock} </li>
                <li>${precio}</li>
                <img style={{width:"60%"}}src={imagen} alt={descripcion} />
                <ItemCount stock={stock} />
            </ul>
        </div>
        
    )

}

export default ItemDetail