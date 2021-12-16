import React, { useState } from 'react';


const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const style = {
        backgroundColor: '#ED7B30'
    }

    const add = () =>{
        count < stock ? setCount(count + 1) : alert('no hay mas stock disponible');
    };
    const remove = () =>{
        count > initial ? setCount(count -1) : alert('se supero el minimo');
    };

    return <>
        <div>
            <div className="itemButtons">
                <button className="btn mx-2" style={style} onClick={remove}>-</button>
                <input type="text" className="form-control text-center" placeholder="cantidad" aria-label="Username" aria-describedby="basic-addon1" value={count} id="input"/>
                <button className="btn mx-2" style={style} onClick={add}>+</button>
            </div>
            <button onClick={() =>onAdd(count)} type="button" className="btn container-fluid mt-2" style={style}>
                Agregar al carrito
            </button>
        </div>
    </>
}

export default ItemCount