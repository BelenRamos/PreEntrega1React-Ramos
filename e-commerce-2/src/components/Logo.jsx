import { Link} from "react-router-dom";
import LogoIsadora from "../assets/LogoIsadora.png"

const Logo = () => {
    return(
        <>
            <Link to={"/paginaPrincipal"}><img src={LogoIsadora}></img>
            </Link>
        </>
    )

}

export default Logo;