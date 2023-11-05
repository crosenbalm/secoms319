import React from 'react';
import products from './products.json';

function ProductList({ addToCart }) {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} width={150}></img>
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
