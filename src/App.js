import logo from "./logo.svg";
import "./App.css";
import TextBubbles from "./textBubbles.js";
import React, { useState } from "react";

const messages = [
  {
    text: "The ship approaches a rocky coastline, danger looms as the fate of the ship and crew hang in the balance.",
  },
  {
    text: "The ship sailed through the water, its sails catching the wind. The captain, who was experienced and well-trained, carefully guided the vessel through the rough seas.",
  },
  { text: "The ship's crew worked together to keep it in good condition." },
  {
    text: "As they came close to a rocky coastline, the captain made a wise decision to steer the ship away from danger, and they sailed safely past the hazardous waters.",
  },
  { text: "5" },
  { text: "6" },
  { text: "7" },
  { text: "8" },
  { text: "9" },
  { text: "10" },
  { text: "11" },
];

function App() {
  const [display, setDisplay] = useState(
    new Array(messages.length).fill("none")
  );

  const handleClick = () => {
    const newDisplay = [...display];
    newDisplay[display.indexOf("none")] = "block";
    setDisplay(newDisplay);
  };
  return (
    <div className="App">
      <TextBubbles messages={messages} display={display} />
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default App;
