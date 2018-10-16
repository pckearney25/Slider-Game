import React from "react";
import "./Radio.css";

function Radio(props) {
  return (
    <div>
      <h4>Game Mode: {props.gameMode}</h4>
      <form className="radio-form">
        <div className="radiobox">
          <label className="radio">
            Numbers
            <input
              type="radio"
              name="game-mode"
              value="Numbers"
              onChange={props.onChange}
              defaultChecked
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className="radiobox">
          <label className="radio">
            Picture
            <input
              type="radio"
              name="game-mode"
              value="Picture"
              onChange={props.onChange}
            />
            <span className="checkmark" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Radio;
