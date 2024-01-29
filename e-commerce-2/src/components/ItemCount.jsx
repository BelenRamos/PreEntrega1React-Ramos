import { useState } from "react";

const ItemCount = ({stock})=>{
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock)

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter+1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter-1)
        }
    }

    const onAdd = () => {
        if (counter < itemStock){
            setItemStock(itemStock - counter);
        }
    }

    return(
        <>
            <div className="row">
                <div className="col-md-2">
                    <div className="btn-group" role="group" >
                        <button type="button" onClick={decrementar}>-</button>
                        <button type="button">{counter}</button>
                        <button type="button" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                        <button type="button" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;