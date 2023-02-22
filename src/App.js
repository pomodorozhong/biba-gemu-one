import logo from "./logo.svg";
import "./App.css";
import TextBubbles from "./textBubbles.js";
import React, { useState } from "react";
import { pickNextEvent, handleEvent } from "./eventEngine.js";
import PlayerStatus from "./playerStatus.js";

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
