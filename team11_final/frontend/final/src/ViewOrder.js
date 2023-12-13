import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const searchOrder = () => {
    // Fetch order details based on orderId
    // This is a placeholder for actual API call or data fetching logic
    const fetchedOrderDetails = {/* Fetch order details based on orderId */};
    setOrderDetails(fetchedOrderDetails);
  };

  const handleInputChange = (event) => {
    setOrderId(event.target.value);
  };

  const renderOrderDetails = () => {
    if (!orderDetails) {
      return <p>No order details found. Please enter a valid order ID.</p>;
    }

    // Assuming orderDetails is an array of items
    const total = orderDetails.reduce((acc, item) => acc + (item.price * item.count), 0);

    return (
      <div>
        <h2>Your Order Items:</h2>
        <ul style={{ listStyle: 'none' }}>
          {orderDetails.map((item) => (
            <li key={item.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.title} (x{item.count})</h3>
                <p>{item.description}</p>
                <p>Item ID: {item.id}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.count).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>View Order</h1>
      <input 
        type="text" 
        placeholder="Enter Order ID" 
        value={orderId} 
        onChange={handleInputChange} 
      />
      <button onClick={searchOrder}>Search Order</button>
      {renderOrderDetails()}
    </div>
  );
}

export default ViewOrder;
