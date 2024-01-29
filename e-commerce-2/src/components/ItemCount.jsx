import { useState } from "react";

const ItemCount = ({stock})=>{
    const [counter, setCounter] = useState(0);
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
        if (counter <= itemStock){
            setItemStock(itemStock - counter);
            setCounter(0);
            console.log("Agregaste "+counter+" productos al carrito");
        }
    }

    return(
        <>
            <div className="container-fluid my-2">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary btn-sm" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-light btn-sm">{counter}</button>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={incrementar}>+</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-sm" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ItemCount;