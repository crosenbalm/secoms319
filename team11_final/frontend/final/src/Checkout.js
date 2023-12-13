import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/checkout.css';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const cartWithCounts = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, count: 1 };
    } else {
      acc[item.id].count += 1;
    }
    return acc;
  }, {});

  const cartItems = Object.values(cartWithCounts);

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      <ul className="order-summary">
        {cartItems.map((item) => (
          <li key={item.id} className="order-item">
            <img src={item.image} width={150} alt={item.title} className="order-item-img" />
            <div className="order-item-details">
              <h3>{item.title} (x{item.count})</h3>
              <p>{item.description}</p>
              <p>Item ID: {item.id}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${(item.price * item.count).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="order-total">Total: ${total.toFixed(2)}</p>

      <form className="checkout-form">
      <label for="inputName" class ="form-label">Full Name </label>
          <input type='text' class="form-control" id="inputName"></input> <br/>
          <label for="inputEmail" class ="form-label">Email </label>
          <input type='text' class="form-control" id="inputEmail"></input> <br/>
          <label for="inputCard" class ="form-label">Debit/Credit Card </label>
          <input type='text' class="form-control" id="inputCard"></input> <br/>
          <label for="inputAddress1" class ="form-label">Address 1 </label>
          <input type='text' class="form-control" id="inputAddress1"></input> <br/>
          <label for="inputAddress2" class ="form-label">Address 2 </label>
          <input type='text' class="form-control" id="inputAddress2"></input> <br/>
          <label for="inputCity" class ="form-label">City </label>
          <input type='text' class="form-control" id="inputCity"></input> <br/>
          <label for="inputState" class ="form-label">State </label>
          <input type='text' class="form-control" id="inputState"></input> <br/>
          <label for="inputZip" class ="form-label">Zip </label>
          <input type='text' class="form-control" id="inputZip"></input> <br/>
      </form>
      <button className="checkout-button" onClick={handleCheckout}>Complete Order</button>
    </div>
  );
}

export default Checkout;
