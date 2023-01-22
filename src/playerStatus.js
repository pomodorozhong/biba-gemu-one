import React from "react";
import "./playerStatus.css";

function PlayerStatus({ player }) {
  return (
    <div>
      <b className="status-container">
        <div className="status-text">HP:</div>{" "}
        <div className="status-number">{player.health}</div>
        <div className="status-text">STR:</div>{" "}
        <div className="status-number">{player.strength}</div>
        <div className="status-text">EXP:</div>{" "}
        <div className="status-number">{player.experience}</div>
        <div className="status-text">INT:</div>{" "}
        <div className="status-number">{player.intelligence}</div>
        <div className="status-text">GOLD:</div>{" "}
        <div className="status-number">{player.gold}</div>
        <div className="status-text">COURAGE:</div>{" "}
        <div className="status-number">{player.courage}</div>
      </b>
    </div>
  );
}

export default PlayerStatus;
