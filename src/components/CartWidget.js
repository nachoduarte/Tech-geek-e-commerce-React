import React from 'react';
import cart from '../images/cart.svg';
import { CartContextUse } from '../context/CartContext.js';


const CartWidget = () => {

    const {cartProducts} = CartContextUse();

    const style = {
        backgroundColor: '#ED7B30'
    }

    return (
        <div>
            <img src={cart}/>
            {cartProducts > 0 ? (
                <span className="badge rounded-pill" style={style}>{cartProducts}</span>
            ) : (
                ""
            )}
            
        </div>
    )
}

export default CartWidget;