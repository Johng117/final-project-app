import React from "react";
import "./quote.css";

// function that gets quote prop and prints its object values
const Quote = ({ quote }) => {
  return (
    <div className="">
      <h1 className="">
        <i className="medium material-icons">format_quote</i>
        {quote.text}
        <i className="medium material-icons">format_quote</i>
      </h1>
      <h4 className="author right-align">...{quote.author}</h4>
    </div>
  );
};

export default Quote;
