import logo from "./logo.svg";
import "./App.css";
import TextBubbles from "./textBubbles.js";
import React, { useState } from "react";
import { pickNextEvent, handleEvent } from "./eventEngine.js";
import PlayerStatus from "./playerStatus.js";

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
  const [displayMessages, setDisplayMessages] = useState([]);
  const [tempString, setTempString] = useState("");
  const [playerAttributes, setPlayerAttributes] = useState({
    health: 100,
    experience: 0,
    gold: 0,
    strength: 51,
    intelligence: 51,
    courage: 51,
  });
  const [tempAttributes, setTempAttributes] = useState({});

  const handleClick = () => {
    if (tempString !== "") {
      setDisplayMessages([...displayMessages, { text: tempString }]);
      setTempString("");
      setPlayerAttributes({ ...playerAttributes, ...tempAttributes });
    } else {
      const id = pickNextEvent(playerAttributes);
      const result = handleEvent(id, playerAttributes);
      console.log(result);

      setDisplayMessages([...displayMessages, { text: result[0] }]);
      setTempString(result[1]);

      setTempAttributes({ ...playerAttributes, ...result[2] });
    }
  };
  return (
    <div className="App">
      <PlayerStatus player={playerAttributes} />
      <div onClick={handleClick}>
        <TextBubbles messages={displayMessages} />
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default App;
