import React, { useState } from "react";
import items from "./selected_products.json";
import Modal from 'react-modal'; // Import the Modal component
import Cart from "./Cart.js"; // Import the Cart component

Modal.setAppElement('#root'); // Set the app root element for accessibility

const Shop = () => {
  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      <img className="img-fluid" src={el.image} width={150} /> <br />

      {el.title} <br />
      {el.category} <br />
      {el.price} <br />
      <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
      <button type="button" variant="light" onClick={() => addToCart(el)}>
        +
      </button>
    </div>
  ));

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    console.log("Checking out");
  };

  return (
    <div>
      <button onClick={openCart}>Open Cart</button>
      {listItems}
      <Modal
        isOpen={isCartOpen}
        onRequestClose={closeCart}
        contentLabel="Cart Modal"
      >
        <button onClick={closeCart}>Close Cart</button>
        <Cart cart={cart} closeCart={closeCart} onCheckout={handleCheckout}/>
      </Modal>
    </div>
  );
};

export default Shop;
