import React, {useState} from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1)

    const add=()=>{
        if(count===stock){
            alert('no se pueden agregar mas productos')
        } else {
            setCount(count+1)
        }
    }

    const sub=()=>{
        if(count===0){
            alert('no se pueden quitar mas productos')
        } else {
            setCount(count-1)
        }
    }
      
    return (
        <div>
            <button type="button" onClick={add}>
                +
            </button>
            <button type="button">
                {count}
            </button>
            <button type="button" onClick={sub}>
                -
            </button>
            <button type="button">
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;