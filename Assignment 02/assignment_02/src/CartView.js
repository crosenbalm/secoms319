import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartView({ cart, setCart }) {
  const navigate = useNavigate();

// When adding to cart, make sure the item has a count property
const addToCart = (product) => {
  setCart((currentCart) => {
    const existingItem = currentCart.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item already exists, increment the count
      return currentCart.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      // If the item is new, add it with a count of 1
      return [...currentCart, { ...product, count: 1 }];
    }
  });
};

const incrementCount = (itemId) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    )
  );
};

const decrementCount = (itemId) => {
  setCart((currentCart) =>
    currentCart.reduce((acc, item) => {
      if (item.id === itemId) {
        if (item.count === 1) return acc; // If only one item left, remove it by not adding to accumulator
        return [...acc, { ...item, count: item.count - 1 }]; // If more than one, decrement count
      }
      return [...acc, item]; // If not the item to decrement, just add to accumulator
    }, [])
  );
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
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.title} (x{item.count})</h3>
                <p>{item.description}</p>
                <p>Item ID: {item.id}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.count).toFixed(2)}</p>
                <div>
                  <button onClick={() => decrementCount(item.id)}>-</button>
                  <span> {item.count} </span>
                  <button onClick={() => incrementCount(item.id)}>+</button>

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
