import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return(
        <div className="card border-0">
            <Link className="nav-link text-dark fs-6" activeclassname="active" to={"/item/"+producto.id}>
            <img src={producto.image} alt={producto.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="card-body">
                    <p className="card-title">{producto.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;