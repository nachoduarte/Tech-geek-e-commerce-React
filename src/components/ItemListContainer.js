import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import ItemList from './ItemList.js';
import BannerCarousel from './BannerCarousel.js';


const ItemListContainer = () =>{



    const [productos, setProductos] = useState([]);

    const { category: idCategory } = useParams();
    console.log(idCategory);


    const getData = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                if (idCategory) {
                    const filtroCategory = data.filter(
                        (item) => item.category === idCategory
                    );
                    resolve(filtroCategory);
                } else {
                    resolve(data);
                }
                reject("error al cargar productos");

            }, 2000);
        });
    };

    useEffect(() =>{
        setProductos([]);
        getData()
            .then((response) =>setProductos(response))
            .catch((error) => console.log(error));
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