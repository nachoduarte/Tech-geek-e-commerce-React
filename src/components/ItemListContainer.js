import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import ItemList from './ItemList.js';
import BannerCarousel from './BannerCarousel.js';
import { db } from '../services/firebase/firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () =>{



    const [productos, setProductos] = useState([]);

    const { category: idCategory } = useParams();
    console.log(idCategory);


    useEffect(() =>{
        if(!idCategory){
            getDocs(collection(db, 'items')).then((querySnapshot) =>{
                console.log(querySnapshot);
                const products = querySnapshot.docs.map((doc) =>{
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}
                })
                setProductos(products);
            }).catch((error) =>{
                console.log('Error searching items', error);
            });
        } else{
            getDocs(query(collection(db, 'items'), where('category', '==', idCategory))).then((querySnapshot) =>{
                console.log(querySnapshot);
                const products = querySnapshot.docs.map((doc) =>{
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}
                })
                setProductos(products);
            }).catch((error) =>{
                console.log('Error searching items', error);
            });
        }

        return(() =>{
            setProductos([])
        })
    },[idCategory]);

   

    return (
        <>
        <BannerCarousel />
        <div className="listContainerFather">
            
            <ItemList productos={productos}/>
    
        </div>

        </>
    )
}

export default ItemListContainer;