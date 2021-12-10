import React from 'react';
import { Link } from 'react-router-dom';

function Item({product}){


    return (
        <div className="cardMargin">
            <div className="card">
                <img src={product.pictureUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Disponibles: {product.stock}</p>
                </div>
                <Link to={`/item/${product.id}`} className="btn mainButtonColor">
                    Ver más
                </Link> 
            </div>
        </div>
    )
}

export default Item;