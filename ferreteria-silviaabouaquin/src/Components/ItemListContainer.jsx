import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
    
    
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh', backgroundColor:'grey'}}>
                <h1 >{props.titulo}</h1>
                <h2 >{props.subtitulo}</h2>
            </div>
            <ItemList />
            
        </div>
    );
};

export default ItemListContainer;