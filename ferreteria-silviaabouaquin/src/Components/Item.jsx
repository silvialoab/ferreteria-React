import ItemCount from "./ItemCount"


const Item = ({id, descripcion, StockInitial, precio, stock}) => {
    return (
        <div className='item'>
            
            <ul>
                <li>{id}</li>
                <li>{descripcion}</li>
                <li>Stock Actual: {StockInitial} </li>
                <li>${precio}</li>
                <ItemCount stock={stock} />
            </ul>
        </div>
        
    )

}

export default Item