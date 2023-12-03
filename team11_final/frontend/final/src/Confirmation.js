import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation({ cart, clearCart }) {
  const [trackingId, setTrackingId] = useState('');
  const navigate = useNavigate();
  const [aggregatedCart, setAggregatedCart] = useState([]);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }

    const aggregatedItems = cart.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, count: 1 };
      } else {
        acc[item.id].count += 1;
      }
      return acc;
    }, {});

    setAggregatedCart(Object.values(aggregatedItems));
    const newTrackingId = Math.floor(Math.random() * 1000000);
    setTrackingId(newTrackingId);

  }, [cart, navigate]);

  const finishOrder = () => {
    clearCart();
    navigate('/'); 
  };

  const total = aggregatedCart.reduce((acc, item) => acc + (item.dishPrice * item.count), 0);

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      {trackingId && <p>Your tracking ID is: {trackingId}</p>}
      
      {aggregatedCart.length > 0 && (
        <div>
          <h2>Your Items:</h2>
          <ul style={{ listStyle: 'none' }}>
            {aggregatedCart.map((item) => (
              <li key={item.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <img src={item.url} alt={item.dishName} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                <div>
                  <h3>{item.dishName} (x{item.count})</h3>
                  <p>{item.description}</p>
                  <p>Item ID: {item.id}</p>
                  <p>Price: ${item.dishPrice}</p>
                  <p>Total: ${(item.dishPrice * item.count).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
      
      <button onClick={finishOrder}>Finish Order</button>
    </div>
  );
}

export default Confirmation;