import React, { useState } from 'react';

const Update = () => {
  const [productId, setProductId] = useState('');
  const [updatedData, setUpdatedData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: '',
      count: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('rating')) {
      setUpdatedData({
        ...updatedData,
        rating: {
          ...updatedData.rating,
          [name.split('.')[1]]: value
        }
      });
    } else {
      setUpdatedData({
        ...updatedData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert price and rating values to numbers if they are not empty
    const formattedData = {
      ...updatedData,
      price: updatedData.price ? parseFloat(updatedData.price) : 0,
      rating: {
        ...updatedData.rating,
        rate: updatedData.rating.rate ? parseFloat(updatedData.rating.rate) : 0,
        count: updatedData.rating.count ? parseInt(updatedData.rating.count) : 0
      }
    };

    try {
      const response = await fetch(`http://localhost:8081/updateItem/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product updated successfully:', data);
        alert(`Product with ID: ${productId} updated successfully.`);
      } else {
        console.error('Update failed:', response.status);
        alert(`Failed to update product. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating the product.');
    }
  };

  return (
    <div className="update-container">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <input
          type="text"
          placeholder="Enter Dish ID"
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
          name="image"
          placeholder="New Image URL"
          value={updatedData.image}
          onChange={handleInputChange}
        />
        <button type="submit" className="update-button">Update Dish</button>
      </form>
    </div>
  );
};

export default Update;