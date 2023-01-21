import "./textBubbles.css";

const TextBubble = ({ text, style }) => {
  return (
    <div className="text-bubble" style={style}>
      <p>{text}</p>
    </div>
  );
};

const TextBubbles = ({ messages, display }) => {
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
    </div>
  );
};

export default TextBubbles;
