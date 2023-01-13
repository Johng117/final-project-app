import React from "react";
import "./quote.css";

// function that gets quote prop and prints its object values
const Quote = ({ quote }) => {
  return (
    <div classname="">
      <h1 className="">
        <i className="medium material-icons">format_quote</i>
        {quote[0].quote_text}
        <i className="medium material-icons">format_quote</i>
      </h1>
      <h4 className="author right-align">...{quote[0].quote_author}</h4>
    </div>
  );
};

export default Quote;
