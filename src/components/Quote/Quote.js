import React from "react";
import "./quote.css";

const Quote = ({ quote }) => {
  return (
    <div classname="">
      {quote.map((quote) => {
        return <div>
          <h1 className="">
            <i className="medium material-icons">format_quote</i>
            {quote.quote_text}
            <i className="medium material-icons">format_quote</i>
          </h1>
          <h4 className="author right-align">...{quote.quote_author}</h4>
        </div>;
      })}
    </div>
  );
};

export default Quote;
