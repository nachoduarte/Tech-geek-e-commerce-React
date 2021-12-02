import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import ItemList from './ItemList.js';


const ItemListContainer = () =>{



    const [productos, setProductos] = useState([]);

    const getData = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                resolve(data);
                reject("error al cargar productos");
            }, 2000);
        });
    };

    useEffect(() =>{
        setProductos([]);
        getData()
            .then((response) =>setProductos(response))
            .catch((error) => console.log(error));
    },[]);


    return (
        <div className="listContainerFather">
            
            <ItemList productos={productos}/>
    
        </div>
    )
}

export default ItemListContainer;