import ItemCount from "./ItemCount"


const ItemDetail = ({descripcion, precio, stock, imagen}) => {
    return (
        <div className='item'>
            <h2>Componente Detail</h2>
            <ul>
                <li>Stock Actual: {stock} </li>
                <li>${precio}</li>
                <img style={{width:"80%"}} src={imagen} alt={descripcion} />
                <ItemCount stock={stock} />
            </ul>
        </div>
        
    )

}

export default ItemDetail