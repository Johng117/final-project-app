import React, { useState, useEffect } from "react";
import Quote from "./components/Quote/Quote";
import Button from "./components/Button/Button";
// import quoteList from "./app-quote-data.json";
import "materialize-css/dist/css/materialize.min.css";


function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [quote, setQuote] = useState({});

// function to handle click event and update state of isClicked
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

// function that creates a random number and updates setQuote with another quote that has the index of the random number
  const ranQuote = () => {
      // let randomNumber = Math.floor(Math.random()*quoteList.length)
      // console.log("random", randomNumber)
      // setQuote(quoteList[randomNumber])
      fetch("http://10.0.40.63:3001/quote")
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          throw `${response.status} ${response.statusText}`;
        })
        .then(function (quote) {
          setQuote(quote);
        })
        .catch(function (error) {
          console.log("An error occurred:", error);
        });
    };

  useEffect(() => {
    ranQuote();
  },[isClicked]);

  return (
    <div className="container">
      <div className="row button-row">
        <div className="col s3">
          <Button handleClick={handleClick} />
        </div>
        <div className="col s9 center-align">
          <Quote className="" quote={quote} />
        </div>
      </div>
    </div>
  );
}

export default App;
