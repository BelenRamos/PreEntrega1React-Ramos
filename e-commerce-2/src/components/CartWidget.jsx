import cartWidget from '../assets/cart.svg'

const CartWidget = () => {
    return (
      <div>
      <button type="button" className="btn position-relative">
        <img src={cartWidget} alt="Icono de Cart" width={18}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          5
          <span className="visually-hidden">Items del carrito</span>
        </span>
      </button>
    </div>

    );
  };
  
  export default CartWidget;