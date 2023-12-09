import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Read = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/items');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const showAllItems = products.map((el) => (
    <div key={el.id}>
      <p>Name: {el.name}</p>
      <p>Description: {el.description}</p>
    </div>
  ));

  return (
    <div>
      <h1>Read All Products</h1>
      <div>Products {showAllItems}</div>
    </div>
  );
};

export default Read;
