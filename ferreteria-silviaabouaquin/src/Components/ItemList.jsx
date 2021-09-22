import React, {useState, useEffect} from "react"
import Item from './Item'
//import data from './data'
import { useParams } from 'react-router-dom'
import { misArticulos, articulosCat} from "../Components/firebase/Firebase"

const ItemList = () =>{
    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        if (categoria != null){
            const articulos=articulosCat(categoria)
            articulos.then((data)=>{
                const auxArticulos=[]
                data.forEach(articulo => {
                    auxArticulos.push({id:articulo.id, categoria:articulo.data().categoria, descripcion:articulo.data().descripcion, precio:articulo.data().precio, stock:articulo.data().stock, imagen:articulo.data().imagen})
                });
                setProductos(auxArticulos)
                setCargando(false)
            })
        } else{
            const articulos=misArticulos()
            articulos.then((data)=>{
                const auxArticulos=[]
                data.forEach(articulo => {
                    auxArticulos.push({id:articulo.id, categoria:articulo.data().categoria, descripcion:articulo.data().descripcion, precio:articulo.data().precio, stock:articulo.data().stock, imagen:articulo.data().imagen})
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