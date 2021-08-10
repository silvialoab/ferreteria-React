import React from 'react';

const Producto = ({producto, cart, setCart, productos}) => {
    const {descripcion, precio, id} = producto

    const addProducto = (id) => {
        const producto = productos.filter((producto) => producto.id === id);
        setCart([...cart, ...producto])
        console.log(cart.length);
    };

    

    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{descripcion}</li>
                <li>${precio}</li>
                <button type="button" onclick={() => addProducto(id)}>
                    Agregar al Carrito
                </button>
            </ul>
        </div>
    );
};

export default Producto;