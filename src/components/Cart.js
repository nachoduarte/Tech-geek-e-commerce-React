import React from 'react';
import {Container} from 'react-bootstrap';

const Cart = () => {
    return (
        <>
            <Container>
                <div className=".col-md-8 cartDisplay">
                    <h3 className=".px-auto">Aqui se renderizará el carrito.</h3>
                </div>
            </Container>
        </>
    )
};

export default Cart;