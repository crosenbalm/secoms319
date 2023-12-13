import React, { useState } from 'react';

const Create = () => {
    const initialFormData = {
        id: '',
        title: '',
        price: '',
        description: '',
        image: '',
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
                // Field is empty or has an invalid value
                alert(`Please fill out the ${key} field.`);
                return;
            }
        }
    
        const formattedData = {
            ...formData,
            rating: { ...formData.rating }
        };
    
        fetch('http://localhost:8081/addDish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            // Check if the element with ID "showData" exists before manipulating it
            var container = document.getElementById("showData");
            if (container) {
                container.innerHTML = JSON.stringify(data);
            }
    
            setFormData(initialFormData);
    
            setSuccessMessage('Product added successfully!');
    
            setTimeout(() => setSuccessMessage(''), 6000);
        });
    };
    

    const clearForm = () => {
        setFormData(initialFormData);
    };

    return (
        <div className="create-container">
            <h1>Create New Product</h1>
            <form onSubmit={createNew} className="create-form">
                <input type="number" placeholder="Dish ID" name="id" value={formData.id} onChange={handleInputChange} />
                <input type="text" placeholder="Dish Title" name="title" value={formData.title} onChange={handleInputChange} />
                <input type="number" placeholder="Dish Price" name="price" value={formData.price} onChange={handleInputChange} />
                <input type="text" placeholder="Dish Description" name="description" value={formData.description} onChange={handleInputChange} />
                <input type="text" placeholder="Image URL" name="image" value={formData.image} onChange={handleInputChange} />

                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="clear-button" onClick={clearForm}>Clear</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                
            </form>
        </div>
    );
};

export default Create;