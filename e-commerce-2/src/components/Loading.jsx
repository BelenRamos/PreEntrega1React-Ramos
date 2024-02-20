const Loading = () => {
    return (
        <div className="conteiner my-5">
            <div className="row">
                <div className="col">
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;