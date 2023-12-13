// Import necessary React modules
import React, { useState, useEffect } from 'react';
import Create from './Create';
import Delete from './Delete';
import Update from './Update';

const ChangeMenu = () => {
  const [newDish, setNewDish] = useState({
    id: 123,
    title: 'New Dish',
    price: 9.99,
    description: 'Delicious new dish',
    image: 'dish.jpg',
  });

  const [updatedData, setUpdatedData] = useState({
    price: 12.99,
    description: 'Updated dish description',
  });

  const [dishIdToDelete, setDishIdToDelete] = useState(123);

  const addDish = async () => {
    try {
      const response = await fetch(`http://localhost:8081/addDish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDish),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  const updateItem = async () => {
    try {
      const response = await fetch(`'http://localhost:8081/updateItem/:id`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteDish = async () => {
    try {
      const response = await fetch(`'http://localhost:8081/deleteDish/:id`, {
        method: 'DELETE',
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  useEffect(() => {
    // This useEffect will run when the component mounts
    addDish();
    updateItem();
    deleteDish();
  }, []); // Empty dependency array ensures the useEffect runs only once on mount

  return (
    <div>
        <div>
            <Create/>
        </div>
        <div>
            <Update/>
        </div>
        <div>
            <Delete/>
        </div>
    </div>
  );
};

export default ChangeMenu;
