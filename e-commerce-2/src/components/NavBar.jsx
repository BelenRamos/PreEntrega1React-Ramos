import CartWidget from './CartWidget';
import BtnCreaCuenta from "./BtnCreaCuenta";
import Logo from "./Logo";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-2 mx-auto d-flex justify-content-center"> 
                    <Logo/>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link"  href="#">Summer Looks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Coleccion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Beauty & Spa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gift Card</a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 txt-end">
                    <BtnCreaCuenta/>
                </div>
                <div className="col-md-2">
                    <ItemListContainer greeting={greetingMessage} />
                </div>
            </div>
        </div>
        
    )

}

export default NavBar;