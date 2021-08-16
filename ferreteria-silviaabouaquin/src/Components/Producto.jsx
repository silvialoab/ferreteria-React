import React, {useState} from 'react';

const Producto = ({producto, cart, setCart, productos, StockInitial}) => {
    const {descripcion, precio, id} = producto
    const [count, setCount] = useState(1)
    const addProducto = (id) => {
        const producto = productos.filter((producto) => producto.id === id)
    }
    
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{descripcion}</li>
                <li>Stock Actual: {StockInitial} </li>
                <li>${precio}</li>
                <button type="button" onClick={() => setCount(count+1)}>
                    +
                </button>
                <button type="button">
                    {count}
                </button>
                <button type="button" onClick={() => setCount(count-1)}>
                    -
                </button>
                <button type="button" onClick={() => addProducto(id)}>
                    Agregar al Carrito
                </button>
            </ul>
        </div>
    );
};

export default Producto;