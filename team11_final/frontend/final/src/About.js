import React from 'react';
 import './CSS/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Team 11</h1>
      <h2>COM S 319</h2>

      <div className="team-member">
        <h3>Cale Rosenbalm</h3>
        <p><strong>Email:</strong> caleighr@iastate.edu</p>
        <p><strong>About:</strong> Cale is a junior at ISU studying for computer science and very much looking forward to winter break. (I am so tired)</p>
      </div>

      <div className="team-member">
        <h3>Yunpeng Lyu</h3>
        <p><strong>Email:</strong> lyp@iastate.edu</p>
        <p><strong>About:</strong> Yunpeng is an ISU student majoring in Computer Science.</p>
      </div>
    </div>
  );
};

export default About;