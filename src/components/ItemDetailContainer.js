import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
import data from '../data/data.json';


function ItemDetailContainer(){
    const [producto, setProducto] = useState({});
    const {id: idProduct} = useParams();

    const getData = () => {
        return new Promise((resolve, reject) => {
            const buscarProducto = data.find(
                (item) => item.id === parseInt(idProduct)
            );
            setTimeout(() =>{
                resolve(buscarProducto);
                reject("error al cargar productos");
            }, 2000);
        });
    };

    useEffect(() =>{
        setProducto({});
        getData()
            .then((resolve) => setProducto(resolve))
            .catch((error) => console.log(error));
    }, [idProduct]);

    console.log(producto)

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer;