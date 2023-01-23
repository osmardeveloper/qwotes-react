import React from "react";

const QuoteButton = ({ newQuote, color }) => {
  return (
    <div>
      <button onClick={newQuote} className="button" style={{ backgroundColor: color }}>
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
};

export default QuoteButton;
