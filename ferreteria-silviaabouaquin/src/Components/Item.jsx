import ItemCount from "./ItemCount"
import {Link} from 'react-router-dom'

const Item = ({id, descripcion, StockInitial, precio, categoria, stock}) => {
    return (
        <div className='item'>
            <Link to={`/${categoria}/${id}`}>
               <ul>
                  <li>{id}</li>
                  <li>{descripcion}</li>
                  <li>Stock Actual: {StockInitial} </li>
                  <li>${precio}</li>
                  <ItemCount stock={stock} />
                </ul>
            </Link>    
        </div>
        
    )

}

export default Item