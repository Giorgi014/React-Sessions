import "./Cart.scss";

const Cart = ({ children, info }) => {
  return (
    <div className="cart_container">
      <p className="homework_text">{info}</p>
      {children}
    </div>
  );
};

export default Cart;
