import React, {useState} from 'react'

const ItemCount = (props) => {
    const [stock, setstock] = useState(props.stock)
    const [count, setCount] = useState(0)

    const handleStock = {
        addStock:()=>{
            if(stock===0){
                alert('No hay mas stock')
            } else{
                setCount(count+1)
                setstock(stock-1)
            }        
        },

        subStock:()=>{
            if(count===0){
                alert('no se pueden quitar mas productos')
            } else {
                setCount(count-1)
                setstock(stock+1)
            }
        }
    }  

    return (
        <div>
            <button type="button" onClick={handleStock.addStock} disabled={stock==='0'}>
                +
            </button>
            <button type="button">
                {count}
            </button>
            <button type="button" onClick={handleStock.subStock} disabled={stock==='0'}>
                -
            </button>
            <button type="button">
                Stock disponible: {stock}
            </button>
            <button type="button" onClick={()=>props.agregar(count)}>
                Agregar al Carrito {count} unidades
            </button>
        </div>
    );
};

export default ItemCount;