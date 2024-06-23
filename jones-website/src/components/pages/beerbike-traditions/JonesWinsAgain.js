import React from 'react';
import './css/JonesWinsAgain.css';

const JonesWinsAgain = () => {
  return (
    <div className="jones-wins-container">
      <div className="content">
        <h1 className="title">2024 BEER BIKE RESULTS</h1>
        <h1 className="sub-title">JONES WINS AGAIN!</h1>
        <div className="results">
          <div className="category">
            <h2 className="category-title">Men's Results</h2>
            <ul className="results-list">
              <li>1st Place: Jones Men's Team</li>
            </ul>
          </div>
          <div className="category">
            <h2 className="category-title">Women's Results</h2>
            <ul className="results-list">
              <li>1st Place: Jones Women's Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JonesWinsAgain;
