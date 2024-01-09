import LogoIsadora from "../assets/LogoIsadora.png"

const Header = () => {
    return(
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <img src={LogoIsadora} alt="Logo Isadora" />
                </div>
                <div className="col">
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
                    </ul>
                </div>
                <div className="col">
                    <a href="" className="btn btn-warning">Crea una cuenta</a>
                </div>
            </div>
        </div>

    )

}

export default Header;