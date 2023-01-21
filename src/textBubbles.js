import "./textBubbles.css";

const TextBubble = ({ text, style }) => {
  return (
    <div className="text-bubble" style={style}>
      <p>{text}</p>
    </div>
  );
};

const TextBubbles = ({ messages }) => {
  return (
    <div>
      <div className="text-bubble-container-outter">
        {[...messages].reverse().map((message, i) => (
          <>
            {i == 0 ? (
              // key={Math.random(): https://stackoverflow.com/questions/63186710/how-to-trigger-a-css-animation-on-every-time-a-react-component-re-renders
              <div className="text-bubble-container-inner rise-animation" key={Math.random()}>
                <TextBubble key={i} text={message.text} />
              </div>
            ) : (
              <div className="text-bubble-container-inner">
                <TextBubble key={i} text={message.text} />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TextBubbles;
