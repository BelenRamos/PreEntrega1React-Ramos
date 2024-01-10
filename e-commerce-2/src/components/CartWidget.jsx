const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado para representar elementos en el carrito
  
    return (
      <div className="cart-widget">
        <FaShoppingCart />
        <span className="badge bg-secondary">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget;