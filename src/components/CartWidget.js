import cart from '../images/cart.svg';


const CartWidget = ({amount}) => {

    const style = {
        backgroundColor: '#ED7B30'
    }

    return (
        <div>
            <img src={cart}/>
            <span className="badge rounded-pill" style={style}>{amount}</span>
        </div>
    )
}

export default CartWidget;