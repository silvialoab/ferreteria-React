import React from 'react';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';
import Navbar from './NavBar'

const ItemListContainer = ({titulo}) => {
      
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', backgroundColor:'cadetblue'}}>
                <h1 >{titulo}</h1>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh', backgroundColor:'cadetblue'}}>
                <Navbar />
            </div>
            <ItemCount stock='5'/>
            <ItemList />
            <ItemDetailContainer />
        </div>
    );
};

export default ItemListContainer;