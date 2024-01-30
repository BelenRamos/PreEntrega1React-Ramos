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
            <div className="container md-3">
                <div className="row-md-6 d-flex justify-content-between align-items-center">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-secondary btn-sm " onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-light btn-sm">{counter}</button>
                            <button type="button" className="btn btn-secondary btn-sm " onClick={incrementar}>+</button>
                        </div>
                    </div>
                    <div className="row m-2 d-flex">
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-dark btn-sm rounded-pill text-nowrap" style={{ maxWidth: "150px" }} onClick={onAdd}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    )
}



export default ItemCount;