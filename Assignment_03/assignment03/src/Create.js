import React, { useState } from 'react';

const Create = () => {
    const initialFormData = {
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0
        }
    };

    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('rating')) {
            setFormData({
                ...formData,
                rating: {
                    ...formData.rating,
                    [name.split('.')[1]]: value
                }
            });
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const createNew = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Validation checks
        for (const key in formData) {
            if (formData[key] === '' || (typeof formData[key] === 'object' && (formData[key].rate === 0 || formData[key].count === 0))) {
                // Field is empty or has invalid value
                alert(`Please fill out the ${key} field.`);
                return;
            }
        }
    
        fetch('http://localhost:8081/addItem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var container = document.getElementById("showData");
            container.innerHTML = JSON.stringify(data);
    
            setFormData(initialFormData);
    
            setSuccessMessage('Product added successfully!');
            
            setTimeout(() => setSuccessMessage(''), 3000);
        });
    };
    

    const clearForm = () => {
        setFormData(initialFormData);
    };

    return (
        <div>
            <h1>Create New Product</h1>
            <form onSubmit={createNew}>
                <label>ID:</label>
                <input type="number" name="id" value={formData.id} onChange={handleInputChange} /> <br/>

                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} /> <br/>

                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} /> <br/>

                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} /> <br/>

                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleInputChange} /> <br/>

                <label>Image URL:</label>
                <input type="text" name="image" value={formData.image} onChange={handleInputChange} /> <br/>

                <label>Rating Rate:</label>
                <input type="number" name="rating.rate" value={formData.rating.rate} onChange={handleInputChange} /> <br/>

                <label>Rating Count:</label>
                <input type="number" name="rating.count" value={formData.rating.count} onChange={handleInputChange} /> <br/>

                <button type="submit">Submit</button>
                <button type="button" onClick={clearForm}>Clear</button>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
};

export default Create;