import React, { useState, useEffect } from 'react';

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
    <div key={el.id}>
      <img src={el.image} width={300} alt={`Image for ${el.title}`} />
      <p>ID: {el.id}</p>
      <p>Name: {el.title}</p>
      <p>Price: {el.price}</p>
      <p>Category: {el.category}</p>
      <p>Description: {el.description}</p>
      {el.rating && (
        <div>
          <p>Rating: {el.rating.rate}</p>
          <p>Rating Count: {el.rating.count}</p>
        </div>
      )}
    </div>
  ));

  return (
    <div>
      <h1>Read All Products</h1>
      <div>Products: {showAllItems}</div>
    </div>
  );
};

export default Read;
