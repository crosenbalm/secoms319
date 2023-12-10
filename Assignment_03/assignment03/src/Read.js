import React, { useState, useEffect } from 'react';
import './Read.css'; 
const Read = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/listItems');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const showAllItems = products.map((el) => (
    <div key={el.id} className="product-card">
      <img src={el.image} className="product-image" alt={`Image for ${el.title}`} />
      <div className="product-info">
        <p><strong>ID:</strong> {el.id}</p>
        <p><strong>Name:</strong> {el.title}</p>
        <p><strong>Price:</strong> {el.price}</p>
        <p><strong>Category:</strong> {el.category}</p>
        <p><strong>Description:</strong> {el.description}</p>
        {el.rating && (
          <div className="product-rating">
            <p><strong>Rating:</strong> {el.rating.rate}</p>
            <p><strong>Rating Count:</strong> {el.rating.count}</p>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <div className="read-container">
      <h1>Read All Products</h1>
      <div className="products-container">{showAllItems}</div>
    </div>
  );
};

export default Read;
