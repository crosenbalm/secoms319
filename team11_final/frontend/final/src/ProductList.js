import React, { useState } from 'react';
import products from './products.json';

function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width={150} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
