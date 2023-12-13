import React, { useState } from 'react';

const Delete = () => {
  const [productId, setProductId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Deleting product with ID: ${productId}`);
  
    try {
      const response = await fetch(`http://localhost:8081/deleteDish/${productId}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log('Product deleted successfully');
        alert(`Product with ID: ${productId} deleted successfully.`);
      } else {
        const data = await response.json();
        console.error('Delete failed:', data);
        alert(`Failed to delete product: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the product.');
    }
  
    setProductId('');
  };
  

  return (
    <div className="delete-container">
      <h1>Delete Dish</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product ID to delete"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default Delete;