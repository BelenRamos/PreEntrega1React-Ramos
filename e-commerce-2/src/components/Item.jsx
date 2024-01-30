const Item = ({producto}) => {

    return(
        <div className="card border-0">
            <img src={producto.image} alt={producto.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="card-body">
                    <h7 className="card-title">{producto.name}</h7>
                </div>
        </div>
    )
}

export default Item;