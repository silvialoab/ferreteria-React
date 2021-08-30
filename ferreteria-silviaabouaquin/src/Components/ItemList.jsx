import React, {useState, useEffect} from "react"
import Item from './Item'
import data from './data'
import { useParams } from 'react-router-dom'

const ItemList = () =>{
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        const dataPromesa = () => {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            })
        }
        dataPromesa().then((res)=>{
            if (categoria != null){
                const productosFiltrados=res.filter((producto)=>producto.categoria===categoria)
                setProductos(productosFiltrados)
                setCargando(false)
            } else{
                setProductos(res)
                setCargando(false)
            }
            
        })
    }, [categoria])
    
    return(
        <>
            {cargando ? <h2>Cargando productos...</h2> :
            productos.map((producto)=> 
            <Item key={producto.id} id={producto.id} descripcion={producto.descripcion} StockInitial={producto.stock} precio={producto.precio} stock={producto.stock} categoria={producto.categoria} /> 
            ) 
            }
        </>
    )  
}

export default ItemList