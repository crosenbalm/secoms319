// import React from 'react';

// const Update = () => {

//   return (
//     <div>
//       <h1>Update Product</h1>
//     </div>
//   );
// };

// export default Update;


import React, { useState } from 'react';
import './Update.css'; // Make sure to create this CSS file

const Update = () => {
  const [productId, setProductId] = useState('');
  const [updatedData, setUpdatedData] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('rating')) {
      setUpdatedData({
        ...updatedData,
        rating: {
          ...updatedData.rating,
          [name.split('.')[1]]: parseFloat(value)
        }
      });
    } else {
      setUpdatedData({
        ...updatedData,
        [name]: name === 'price' || name.includes('rating') ? parseFloat(value) : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the update logic here
    console.log(`Updating product ${productId} with data: `, updatedData);
  };

  return (
    <div className="update-container">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <input
          type="text"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <input
          type="text"
          name="title"
          placeholder="New Title"
          value={updatedData.title}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="price"
          placeholder="New Price"
          value={updatedData.price}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="description"
          placeholder="New Description"
          value={updatedData.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="category"
          placeholder="New Category"
          value={updatedData.category}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="image"
          placeholder="New Image URL"
          value={updatedData.image}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="rating.rate"
          placeholder="New Rating Rate"
          value={updatedData.rating.rate}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="rating.count"
          placeholder="New Rating Count"
          value={updatedData.rating.count}
          onChange={handleInputChange}
        />

      <button type="submit" className="update-button">Update Product</button>
      </form>
    </div>
  );
};

export default Update;
