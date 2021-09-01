import { Link } from 'react-router-dom'

const Item = ({id, descripcion, StockInitial, precio, categoria, stock}) => {
    return (
        <div className='itemG'>
            <Link to={`/${categoria}/${id}`}>
                <p>{id}</p>
                <p>{descripcion}</p>
                <p>Stock Actual: {StockInitial} </p>
                <p>${precio}</p>
            </Link>    
        </div>
        
    )

}

export default Item