import React from 'react';

import Card from './Card';

const CardList = () => {
  return (
    <div id="app-container" className="container">
      <h1>Debt Paydown Calculator</h1>
      <div id="calc-container">
        <div id="list">
          <Card i={1} />
          <Card i={2} />
        </div>
        <div id="final-button-container" className="container button">
          <button id="add-debt">
            <span>Add another debt</span>
          </button>
          <button id="calculate">
            <span>Calculate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
