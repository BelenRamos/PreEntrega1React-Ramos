import { useEffect, useState } from "react";
import arrayProductos from "../components/json/productos.json";
import ItemList from "./ItemList";

const Fetch = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        setProductos(arrayProductos);
    })

    /* fetch("productos.json")
        .then(respuesta => respuesta.json())
        .then(datos => { setProductos(datos) }) */


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
