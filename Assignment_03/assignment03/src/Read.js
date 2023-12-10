import React, { useState, useEffect } from 'react';

const Read = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/listItems'); // Updated to use fetch
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
      <p>Name: {el.title}</p>
      <p>Price: {el.price}</p>
      <p>"Category: {el.category}</p>
      <p>Description: {el.description}</p>
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
