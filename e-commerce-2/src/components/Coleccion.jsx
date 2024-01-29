import { useEffect, useState } from "react";
import arrayProductos from "../components/json/productos.json";
import ItemList from "./ItemList";

const Coleccion =() =>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Filtrar los productos por la categoría "summerlooks"
        const coleccionProducts = arrayProductos.filter(producto => producto.category === "coleccion");
        setProductos(coleccionProducts);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h3>Productos de coleccion</h3>
                </div>
            </div>
            <div className="row">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default Coleccion;