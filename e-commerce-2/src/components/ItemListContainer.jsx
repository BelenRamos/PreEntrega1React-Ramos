import { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import arrayProductos  from "../components/json/productos.json"
import ItemDetail from "./ItemDetail";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa= new Promise(resolve => {
      setTimeout(()=> {
        resolve(arrayProductos);
      }, 2000);
      })
      promesa.then(data => {
        setItems(data);
        console.log(data);
    })
  }, []);

    return (
      <>
        <ItemDetail item={items}/>

      </>
    )
  }
  
  export default ItemListContainer;