import { useEffect, useState } from "react";
import arrayProductos from "../components/json/productos.json";
import ItemList from "./ItemList";

const SummerLooks = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Filtrar los productos por la categoría "summerlooks"
        const summerProducts = arrayProductos.filter(producto => producto.category === "summerlooks");
        setProductos(summerProducts);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h3>Summer Looks 💕</h3>
                </div>
            </div>
            <div className="row">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default SummerLooks;
