import React from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { CartContextUse } from '../context/CartContext.js';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { clear, removeItem, cart, totalPrice } = CartContextUse();



    return (
        <>
            <Container>
                <div className=".col-md-8 cartDisplay">
                    <h3 className=".px-auto">Tu Carrito</h3>
                    {cart.map((element) =>{
                        return (
                            <>
                                <ListGroup horizontal className="mt-3">
                                    <ListGroup.Item><img src={element.item.pictureUrl} className="w-25"/></ListGroup.Item>
                                    <ListGroup.Item>{element.item.name}</ListGroup.Item>
                                    <ListGroup.Item>{element.item.price}</ListGroup.Item>
                                    <ListGroup.Item>{element.item.description}</ListGroup.Item>
                                    <ListGroup.Item>Seleccionados: {element.quantity}</ListGroup.Item>
                                    <Button style={{backgroundColor: "#ED7B30" }} onClick={() => removeItem(element.item.id)}>Quitar Producto</Button>
                                </ListGroup>
                            </>
                        );
                    })}

                        {cart.length > 0 ? (
                            <>
                            <div>
                                <h5 className="mt-5 align-self-end text-center">
                                    Total a pagar: ${totalPrice}
                                </h5>
                                <Link to="/checkout" className="btn mt-3 w-100" style={{backgroundColor: "#ED7B30" }}>Continuar Compra</Link>
                            </div>
                                <Button onClick={clear} className="w-25 mt-5" variant="warning">
                                    Vaciar carrito
                                </Button>
                            </>
                        ) : (
                            <h5>El Carrito esta vacio</h5>
                        )}
                        
                        <Link to="/" className="btn mt-3 w-25" style={{backgroundColor: "#ED7B30" }}>
                            Volver a la Tienda
                        </Link>
                        
                </div>
            </Container>
        </>
    )
};

export default Cart;