const Item = ({id, descripcion, StockInitial, precio}) => {
    return (
        <ul>
            <li>{id}</li>
            <li>{descripcion}</li>
            <li>Stock Actual: {StockInitial} </li>
            <li>${precio}</li>
        </ul>
    )

}

export default Item