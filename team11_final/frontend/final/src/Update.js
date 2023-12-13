import React, { useState } from 'react';

const Update = () => {
  const [productId, setProductId] = useState('');

      const initialFormData = {
        id: '',
        title: '',
        price: '',
        description: '',
        image: '',
    };

    const [formData, setFormData] = useState(initialFormData);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: value !== '' ? value : undefined,
          };
        });
      };
      

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formattedData = Object.entries(formData).reduce((acc, [key, value]) => {
          if (value !== '') {
            acc[key] = key === 'price' ? parseFloat(value) : value;
          }
          return acc;
        }, {});
      
        try {
          const response = await fetch(`http://localhost:8081/updateItem/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedData),
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
      

  const clearForm = () => {
    setProductId(''); 
    setFormData(initialFormData); 
  };
  

  return (
    <div className="update-container">
      <h1>Update Dish</h1>
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
          value={formData.title}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="price"
          placeholder="New Price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="description"
          placeholder="New Description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="image"
          placeholder="New Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <button type="submit" className="update-button">Update Dish</button>
        <button type="button" className="clear-button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
};

export default Update;