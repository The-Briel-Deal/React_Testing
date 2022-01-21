import React from "react";
import ReactDOM from "react-dom";

var afternoonStyle = {
  color: "Orange"
};
var eveningStyle = {
  color: "Brown"
};
var morningStyle = {
  color: "Blue"
};

let good_aftorning = () => {
  let hour = new Date().getHours();
  switch (true) {
    case hour >= 12 && hour < 18:
      return <h1 style={afternoonStyle}>ITS THE AFTAAANNOOOOOONNN</h1>;
    case hour >= 18 && hour < 24:
      return <h1 style={eveningStyle}>I'm getting sweepy</h1>;
    case hour >= 0 && hour < 12:
      return <h1 style={morningStyle}>GOOD MORNING</h1>;
    default:
      break;
  }
};

ReactDOM.render(<div>{good_aftorning()}</div>, document.getElementById("root"));
