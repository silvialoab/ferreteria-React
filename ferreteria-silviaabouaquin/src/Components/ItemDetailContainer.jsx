import React, {useState, useEffect} from "react"
import ItemDetail from './ItemDetail'
import data from './data'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoria, id} = useParams()  

    useEffect(() => {
        const productos = () => {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            })
        }
        productos().then((items)=>{
            const producto = items.find(producto => producto.id===id)
            setProducto(producto)
            setCargando(false)
        })
    }, [])
    
    return(
        <>
            {cargando ? <h2>CARGANDO PRODUCTO...</h2> :
                <ItemDetail descripcion={producto.descripcion} stock={producto.stock} precio={producto.precio} imagen={producto.imagen} /> 
            }
        </>
    )  
}

export default ItemDetailContainer