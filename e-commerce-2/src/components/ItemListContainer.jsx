import { useEffect, useState } from "react";
import arrayProductos  from "../components/json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();
   // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setProductos(arrayProductos);
        const promesa = new Promise (resolve => {
            setTimeout( () => {
                resolve (id? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 500);
        })
        promesa.then(data=>{
            setProductos(data);
            console.log(data);
        })
    }, [id]);

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

export default ItemListContainer;
