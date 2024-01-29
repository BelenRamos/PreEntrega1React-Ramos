import { Link} from "react-router-dom";
import CartWidget from './CartWidget';
import Logo from "./Logo";
import ItemCount from "./ItemCount";


const NavBar = () => {
    return(
        <div className="container-fluid my-4">
            <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                    <Logo />
                </div>
                <div className="col-md-6">
                    {/* Categorias clickeables de la pagina */}
                    <ul className="nav nav-tabs d-flex justify-content-around">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fs-6" to={"/summerLooks"}>Summer Looks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fs-6" to={"/coleccion"}>Coleccion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fs-6" to={"/beauty&Spa"}>Beauty & Spa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fs-6" to={"/giftCard"}>Gift Card</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 d-flex justify-content-end align-items-center">
                    <ItemCount stock={10}/>
                </div>
                <div className="col-md-1 d-flex justify-content-start align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>

    )

}

export default NavBar;