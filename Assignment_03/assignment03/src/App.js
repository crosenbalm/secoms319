import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About'; // Assuming you have About component in a separate file
import Create from './Create'; // Assuming you have Create component in a separate file
import Read from './Read'; // Assuming you have Read component in a separate file
import Update from './Update'; // Assuming you have Update component in a separate file
import Delete from './Delete'; // Assuming you have Delete component in a separate file

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
