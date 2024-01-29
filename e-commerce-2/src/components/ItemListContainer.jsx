import ItemCount from "./ItemCount";


const ItemListContainer = ({ emoji, greeting }) => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-primary p-5" role="alert" >
              <h1>{emoji}</h1>
              <h2>{greeting}</h2>
              <ItemCount stock={10}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemListContainer;