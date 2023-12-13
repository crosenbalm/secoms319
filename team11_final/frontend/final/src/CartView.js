import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartView({ cart, setCart, subtractFromCart }) {
  const navigate = useNavigate();

const incrementCount = (item) => {
  setCart([...cart, item]);
};

const decrementCount = (item) => {
  subtractFromCart(item);
};



  const clearCart = () => {
    setCart([]);
  };

  // Aggregate cart items by id and count them
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
    navigate('/checkout');
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul style={{ listStyle: 'none' }}>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.title} (x{item.count})</h3>
                <p>{item.description}</p>
                <p>Item ID: {item.id}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.count).toFixed(2)}</p>
                <div>
                  <button onClick={() => decrementCount(item)}>-</button>
                  <span> {item.count} </span>
                  <button onClick={() => incrementCount(item)}>+</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      {cart.length > 0 && (
        <div>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartView;