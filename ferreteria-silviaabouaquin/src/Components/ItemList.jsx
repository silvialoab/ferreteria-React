import React, {useState, useEffect} from "react"
import Item from './Item'

const data = [
    { id: 1, descripcion: 'Balde de Albañil', precio: 500, stock: 24 },
    { id: 2, descripcion: 'Fratacho Plastico', precio: 500, stock: 30 },
    { id: 3, descripcion: 'Caja de chapa', precio: 200 , stock: 40 },
    { id: 4, descripcion: 'Latex interior', precio: 2500 , stock: 5 },
    { id: 5, descripcion: 'Llave exterior', precio: 150 , stock: 36},
    { id: 6, descripcion: 'Cable bipolar', precio: 5000, stock: 10 }
]

const ItemList = () =>{
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const dataPromesa = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(data)
            },2000)
        })
        }
        dataPromesa().then((res)=>{
            setProductos(res)
            console.log(productos)
        })
    }, [productos])
    
    return(
        <>
            {productos.length!==0 ? productos.map((producto)=> 
            <Item key={producto.id} id={producto.id} descripcion={producto.descripcion} StockInitial={producto.stock} precio={producto.precio} />) 
            : 
            <div>Cargando productos...</div>}
        </>
    )  
}

export default ItemList