import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import data from '../data/data.json';


function ItemDetailContainer(){
    const [producto, setProducto] = useState([]);

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data[0]);
                reject("error al cargar productos");
            }, 2000);
        });
    };

    useEffect(() =>{
        setProducto([]);
        getData()
            .then((resolve) => setProducto(resolve))
            .catch((error) => console.log(error));
    }, []);

    console.log(producto)

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer;