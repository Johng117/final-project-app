import React from "react";
import "./button.css";

// button component to change quote
const Button = ({ handleClick, label }) => {
  return (
    <div
      data-testid="button"
      className="waves-effect waves-light btn-large blue"
      onClick={handleClick}
    >
      <p>QUOTE</p>
    </div>
  );
};

export default Button;
