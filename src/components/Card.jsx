import React from 'react';

const Card = ({ i }) => {
  return (
    <div>
      <h2>Debt {i}</h2>
      <div id="delete-button-container" className="container button">
        <button id="delete-button">
          <span>Delete this debt</span>
        </button>
      </div>
      <form>
        <div className="element">
          <label htmlFor="account">Account Name</label>
          <input id="account" />
        </div>
        <div className="element">
          <label htmlFor="account-type">Account Type</label>
          <input id="account-type" />
        </div>
        <div className="element">
          <label htmlFor="balance">Remaining Balance</label>
          <input id="balance" />
        </div>
        <div className="element">
          <label htmlFor="rate">Interest Rate</label>
          <input id="rate" />
        </div>
        <div className="element">
          <label htmlFor="payment">Minimum Payment Due</label>
          <input id="payment" />
        </div>
      </form>
    </div>
  );
};

export default Card;
