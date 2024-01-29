import { useEffect, useState } from "react";
import arrayProductos from "../components/json/productos.json";
import ItemList from "./ItemList";

const BeautySpa =() =>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Filtrar los productos por la categoría "summerlooks"
        const bbssProducts = arrayProductos.filter(producto => producto.category === "beauty&spa");
        setProductos(bbssProducts);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h3>Beauty & Spa</h3>
                </div>
            </div>
            <div className="row">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default BeautySpa;