// Payment.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Payment({ cart, clearCart }) {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Process payment here

    // After payment is processed:
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Total amount: ${cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}</p>
      {/* Payment form or payment processing component goes here */}
      <button onClick={handlePayment}>Complete Payment</button>
    </div>
  );
}

export default Payment;
