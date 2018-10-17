import React from "react";
import "./GameButton.css";

function GameButton(props) {
  return (
    <button className="game-button" style={props.style} onClick={props.onClick}>
      {props.message}
    </button>
  );
}

export default GameButton;
