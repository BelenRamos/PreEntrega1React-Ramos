import { Link} from "react-router-dom";
import CartWidget from './CartWidget';
import BtnCreaCuenta from "./BtnCreaCuenta";
import Logo from "./Logo";



const NavBar = () => {
    return(
        <div className="container-fluid my-4">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <Logo />
                </div>
                <div className="col-md-5 d-flex align-items-center"> 
                    {/* Categorias clickeables de la pagina */}
                    <ul className="nav nav-tabs">
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
                <div className="col-md-3 d-flex justify-content-end align-items-center">
                    <BtnCreaCuenta />
                    <CartWidget />
                </div>
            </div>
        </div>

    )

}

export default NavBar;