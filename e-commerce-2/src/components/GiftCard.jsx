import { useEffect, useState } from "react";
import arrayProductos from "../components/json/productos.json";
import ItemList from "./ItemList";

const GiftCard =() =>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Filtrar los productos por la categoría "summerlooks"
        const gcProducts = arrayProductos.filter(producto => producto.category === "giftcard");
        setProductos(gcProducts);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h3>Gift Cards 😍</h3>
                </div>
            </div>
            <div className="row">
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default GiftCard;