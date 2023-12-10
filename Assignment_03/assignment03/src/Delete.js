// import React from 'react';

// const Delete = () => {

//   return (
//     <div>
//       <h1>Delete Product</h1>
//     </div>
//   );
// };

// export default Delete;


import React, { useState } from 'react';
import './Delete.css';
const Delete = () => {
  const [productId, setProductId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the delete logic here
    console.log(`Deleting product with ID: ${productId}`);
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
