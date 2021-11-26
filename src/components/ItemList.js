import React from 'react';
import Item from './Item.js';

const ItemList = ({productos}) =>{
    console.log(productos);
    const style = { 
        color: '#ED7B30'
    }

    return(
        <div className="listContainerDisplay">
            {productos.length !== 0 ? (
                productos.map((producto) => (
                    <Item product={producto} key={producto.id}/>
                ))
            ) : (
                <div className="spinner-border" style={style} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
}

export default ItemList;