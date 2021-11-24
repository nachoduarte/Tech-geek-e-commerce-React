import ItemCount from './ItemCount.js';

const ItemListContainer = ({greeting}) =>{

    const onAdd = (qty) =>{
        alert(qty + " productos agregados")
    }

    return (
        <div className="landingDisplay">
            <h1 className="fontReg mainTextColor">{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;