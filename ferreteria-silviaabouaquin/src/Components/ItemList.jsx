import React, {useState, useEffect} from "react"
import Item from './Item'
//import data from './data'
import { useParams } from 'react-router-dom'
import { misArticulos} from "../Components/firebase/Firebase"

const ItemList = () =>{
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        if (categoria != null){
            console.log('nada')
        } else{
            const articulos=misArticulos()
            articulos.then((data)=>{
                const auxArticulos=[]
                data.forEach(articulos=>{
                    auxArticulos.push({id:articulos.id, descripcion:Item.data().descripcion, precio:Item.data().precio, descripcion:Item.data().descripcion, stock:Item.data().stock, imagen:Item.data().imagen})
                });
                setProductos(auxArticulos)
                setCargando(false)
            })
        }
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