import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Implement your checkout logic here (e.g., sending an order, processing payment, etc.).

    // For this example, we'll just clear the cart.
    clearCart();

    // Navigate to a confirmation page or display a confirmation message.
    navigate('/confirmation');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={handleCheckout}>Complete Order</button>
    </div>
  );
}

export default Checkout;
