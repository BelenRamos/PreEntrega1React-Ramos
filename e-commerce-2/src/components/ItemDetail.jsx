import ItemCount from "./ItemCount";

const ItemDetail =({item}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.name}</h1>
                    <p>#{item.category}</p>
                    <p><b>${item.price}</b></p>
                    <div className="col-md-2 d-flex justify-content-end align-items-center">
                        <ItemCount stock={item.stock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;