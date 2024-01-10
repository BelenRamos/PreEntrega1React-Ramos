import BtnCreaCuenta from "./BtnCreaCuenta";
import Logo  from "./Logo"
import NavBar from "./NavBar";

const Header = () => {
    return(
        <div className="conteiner my-4">
            <div className="row">
                <div className="col-md-2 mx-auto d-flex justify-content-center"> 
                    <Logo/>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <NavBar/>
                </div>
                <div className="col-md-3 txt-end">
                    <BtnCreaCuenta/>
                </div>
            </div>
        </div>

    )

}

export default Header;