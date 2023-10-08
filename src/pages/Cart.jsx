import { useCart } from '../CartContext';
import './cartStyles.css';
import Payments from '../assets/payments.png';
function Cart() {
  const { cart, addToCart, removeFromCart, minusCount } = useCart();

  console.log(cart);
  const handleRemove = itemId => {
    removeFromCart(itemId);
  };
  const cartTotal = Object.values(cart).reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  console.log(cart, 'cartpage');
  return (
    <div id="cart">
      <div className="cart-left">
        <div className="head">Shopping Cart</div>

        <div className="product-list">
          {Object.values(cart).map(item => (
            <div key={item.id} className="book-item">
              <div id="itemRemoveBtn">
                <span onClick={() => handleRemove(item.id)}>x</span>
              </div>{' '}
              <div id="itemImage">
                <img src={item.image} alt={item.name} />
              </div>
              <div id="itemName">{item.name}</div>
              <div id="itemPrice">
                <span id="incDecBtn" onClick={() => minusCount(item.id)}>
                  -
                </span>
                ₹ {item.price}
                <span id="incDecBtn" onClick={() => addToCart(item)}>
                  +
                </span>
              </div>
              <div id="itemCount">{item.count}</div>
              <div id="itemTotal">₹ {(item.count * item.price).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-right">
        <div className="totalHead">
          <h2>Cart Total</h2>
        </div>
        <div className="totalBody">
          <div className="subTotal">
            <h3>Sub Total</h3>
            <h3> ₹{cartTotal.toFixed(2)}</h3>
          </div>
          <div className="shipping">
            <h5>Delivery</h5>
            <h5>Free</h5>
          </div>
          <div className="checkout">
            <button>Checkout</button>
          </div>
          <div className="payments">
            <img src={Payments} alt="payments" />
          </div>
        </div>

        {/* <div className="totalShip">Free Shipping for you !</div> */}
      </div>
    </div>
  );
}

export default Cart;
