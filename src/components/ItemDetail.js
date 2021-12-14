import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Card, Container, Spinner } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

const ItemDetail = ({producto}) =>{
    const { name, description, price, pictureUrl, stock } = producto;

    console.log(producto);

    const [count, setCount] = useState(0);

    const onAdd = (qty) =>{
        alert(qty + " productos agregados")
        setCount(qty);
    }


    const style = { 
        color: '#ED7B30'
    }


    return(
        <Container className="d-flex justify-content-center detailDisplay">
            {(name, pictureUrl, description, price, stock) ? (
                <Card style={{width: "100%"}} className="text-center me-4 mt-3">
                    <Card.Img variant="top" className="mt-3 ps-3 pe-3" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>
                            <h4>{name}</h4>
                        </Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h5>${price}</h5>
                        {
                            count > 0 ? (
                                <Link to="/cart" className="btn" style={{backgroundColor: "#ED7B30" }}>Ir al carrito</Link>
                            ) : (
                                <ItemCount stock={stock} initial={count} onAdd={onAdd} />
                            )
                        }
                        
                    </Card.Body>
                </Card>
            ) : (
                <Spinner animation="border" style={style} />
            )}
        </Container>
    )
}

export default ItemDetail;