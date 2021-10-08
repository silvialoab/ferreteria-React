import React, { useState } from "react";

const Context = React.createContext()

const CartFuncion = ({children}) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item=>item.id===producto.id)
        
        if (!itemExiste) {
            setCart([...cart, {id:producto.id, descripcion:producto.descripcion, precio:producto.precio, cantidad:cantidad, subTotal:(producto.precio*cantidad)}])
            setUnidades(unidades+1)
            setTotal(total+(producto.precio*cantidad))
        }else{
            const cartAux=cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subTotal+=(producto.precio*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.precio*cantidad))
        }
    }

    const remove=(id, cantidad, precio)=> {
        const carritoRefresh = cart.filter((item)=> item.id !== id)
        setCart(carritoRefresh)
        setTotal(total-(cantidad*precio))
    }

    const clear=()=> {
        setCart([])
        setTotal(0)
    }

    return <Context.Provider value={{ cart, unidades, total, onAdd, remove, clear }}>
        {children}
    </Context.Provider>
}

export {CartFuncion, Context}




