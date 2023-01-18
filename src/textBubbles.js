import React, { useState } from "react";
import "./textBubbles.css";

const TextBubble = ({ text, style }) => {
  return (
    <div className="text-bubble" style={style}>
      <p>{text}</p>
    </div>
  );
};

const TextBubbles = ({ messages }) => {
  const [display, setDisplay] = useState(
    new Array(messages.length).fill("none")
  );

  const handleClick = () => {
    const newDisplay = [...display];
    newDisplay[display.indexOf("none")] = "block";
    setDisplay(newDisplay);
  };

  return (
    <div>
      <div className="text-bubble-container-outter">
        {[...messages].reverse().map((message, i) => (
          <div
            className="text-bubble-container-inner"
            style={{ display: display[messages.length - 1 - i] }}
          >
            <TextBubble key={i} text={message.text} />
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default TextBubbles;
