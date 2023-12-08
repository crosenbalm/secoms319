import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// About component
const About = () => {
    return (
        <div>
            <h1>About Team 11</h1>
            <h2>COM S 319</h2>
            <div>
                Cale Rosenbalm <br/>
                Student email: caleighr@iastate.edu <br/>
                About: Cale is a junior at ISU studying for computer science and very much looking forward to winter break. (I am so tired) <br/>
            </div>
        </div>
    );
};

// Create component
const Create = () => {
  // Your logic for creating a new product
  return (
    <div>
      <h1>Create New Product</h1>
      {/* Add your form or UI for creating a new product */}
    </div>
  );
};

// Read component (show all)
const Read = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Your logic for fetching all products
    // Example: fetchAllProducts();
  }, []);

  // Your UI logic to display products
  const showAllItems = products.map((el) => (
    <div key={el.id}>
      {/* Display product information */}
    </div>
  ));

  return (
    <div>
      <h1>Read All Products</h1>
      <div>Products {showAllItems}</div>
    </div>
  );
};

// Update component
const Update = () => {
  // Your logic for updating the price of a product
  return (
    <div>
      <h1>Update Product</h1>
      {/* Add your form or UI for updating a product */}
    </div>
  );
};

// Delete component
const Delete = () => {
  // Your logic for deleting a product
  return (
    <div>
      <h1>Delete Product</h1>
      {/* Add your form or UI for deleting a product */}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/read">Read</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
