import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, addItem, removeItem, clear, cantTotalProductos, sumaTotalProductos} = useContext(CartContext)

    if (cantTotalProductos() == 0) {
        return (
            <div className="conteiner">
                <div className="row">
                    <div className="col">
                        <p className="display-1">💋</p>
                        <div className="alert alert-danger" role="alert"> 
                            No se encontraron productos en el carrito
                        </div>
                        <Link to={"/"} className="btn my-5">Volver a Pagina Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <p className="display-1">🕶️</p>
                    <div className="alert alert-danger" role="alert"> 
                        Hay productos en el carrito
                    </div>
                    <Link to={"/"} className="btn my-5">Volver a Pagina Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;