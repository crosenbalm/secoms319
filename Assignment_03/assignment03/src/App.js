import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link">Read</Link>
            </li>
            <li className="nav-item">
              <Link to="/update" className="nav-link">Update</Link>
            </li>
            <li className="nav-item">
              <Link to="/delete" className="nav-link">Delete</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
