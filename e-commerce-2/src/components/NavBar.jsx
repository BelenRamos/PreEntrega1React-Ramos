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
                            <a className="nav-link text-dark fs-6" href="#">Summer Looks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-6" href="#">Coleccion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-6" href="#">Beauty & Spa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-6" href="#">Gift Card</a>
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