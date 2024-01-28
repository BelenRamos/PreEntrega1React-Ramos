const Fetch = () =>{
    fetch('https://fakestoreapi.com/products')
            .then(respuesta=>respuesta.json())
            .then(datos=>console.log(datos))

    return(
        <h1>Fetch</h1>
    )
}

export default Fetch;