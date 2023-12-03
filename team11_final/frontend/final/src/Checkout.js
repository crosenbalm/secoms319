import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  

  // Aggregate cart items by id and count them
  const cartWithCounts = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, count: 1 };
    } else {
      acc[item.id].count += 1;
    }
    return acc;
  }, {});

  // Convert the map object back to an array for rendering
  const cartItems = Object.values(cartWithCounts);

  const handleCheckout = () => {
    // Implement your checkout logic here.
    // clearCart();
    navigate('/confirmation');
  };


  // const handleCheckout = () => {
  //   // You can add any pre-payment logic here if necessary
  //   clearCart();
  //   navigate('/payment');
  // };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      <ul style={{ listStyle: 'none' }}>
        {cartItems.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
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

      <div>
        <div>
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
        </div>
      </div>
      <button onClick={handleCheckout}>Complete Order</button>
    </div>
  );
}

export default Checkout;