import React, {useState, useEffect} from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { art } from "../Components/firebase/Firebase"

const ItemDetailContainer = () =>{
    
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()  
    
    useEffect(() => {
        const articulo = art(id)
            articulo.then((data)=>{
            setProducto(data.data())
            setCargando(false)
        })
    }, [id])
    
    return(
        <>
            {cargando ? <h2>CARGANDO PRODUCTO...</h2> :
                <ItemDetail id={producto.id} descripcion={producto.descripcion} stock={producto.stock} precio={producto.precio} imagen={producto.imagen} /> 
            }
        </>
    )  
}

export default ItemDetailContainer