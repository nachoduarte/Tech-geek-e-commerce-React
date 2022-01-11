import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
import { db } from '../services/firebase/firebase.js';
import { getDoc, doc } from 'firebase/firestore';


function ItemDetailContainer(){
    const [producto, setProducto] = useState({});
    const {id: idProduct} = useParams();



    useEffect(() =>{
        getDoc(doc(db, 'items', idProduct)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProducto(product);
        }).catch((error) =>{
            console.log('Error searching item', error);
        });
        return(() =>{
            setProducto()
        })
    }, [idProduct]);
   
    console.log(producto)

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer;