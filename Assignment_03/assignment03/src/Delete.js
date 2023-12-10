// import React from 'react';

// const Delete = () => {

//   return (
//     <div>
//       <h1>Delete Product</h1>
//     </div>
//   );
// };

// export default Delete;


// import React, { useState } from 'react';
// import './Delete.css';
// const Delete = () => {
//   const [productId, setProductId] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement the delete logic here
//     console.log(`Deleting product with ID: ${productId}`);
//   };

//   return (
//     <div className="delete-container">
//       <h1>Delete Product</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Product ID to delete"
//           value={productId}
//           onChange={(e) => setProductId(e.target.value)}
//         />
//         <button type="submit">Delete Product</button>
//       </form>
//     </div>
//   );
// };

// export default Delete;


import React, { useState } from 'react';
import './Delete.css';

const Delete = () => {
  const [productId, setProductId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Deleting product with ID: ${productId}`);

    try {
      const response = await fetch(`http://localhost:8081/deleteItem/${productId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Product deleted successfully:', data);
        alert(`Product with ID: ${productId} deleted successfully.`);
      } else {
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
      <h1>Delete Product</h1>
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
