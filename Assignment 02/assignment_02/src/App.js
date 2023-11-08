import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import CartView from './CartView';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const subtractFromCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
  if (itemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart.splice(itemIndex, 1); // Remove the item at itemIndex
    setCart(updatedCart);
  }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<CartView cart={cart} setCart={setCart} subtractFromCart={subtractFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="/confirmation" element={<Confirmation cart={cart} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
