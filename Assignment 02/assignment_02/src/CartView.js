import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartView({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the "Checkout" page
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p> {/* Display the correct total */}
      {cart.length > 0 && (
        <div>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout}>Checkout</button> {/* Button to initiate checkout */}
        </div>
      )}
    </div>
  );
}

export default CartView;
