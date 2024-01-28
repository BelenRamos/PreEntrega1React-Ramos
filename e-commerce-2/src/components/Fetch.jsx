import { useState } from "react";
import ItemList from "./ItemList";

const Fetch = () => {
    const [productos, setProductos] = useState([]);

    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(respuesta => respuesta.json())
        .then(datos => { setProductos(datos) })

    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h1>Productos</h1>
                </div>
            </div>
            <div className="row">
               <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default Fetch;
