import React from 'react';
import ItemCount from './ItemCount.js';

function Item({product}){

    const onAdd = (qty) =>{
        alert(qty + " productos agregados")
    }

    return (
        <div className="cardMargin">
            <div className="card">
                <img src={product.pictureUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Disponibles: {product.stock}</p>
                </div>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item;