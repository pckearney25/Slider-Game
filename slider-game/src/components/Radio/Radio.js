import React from "react";
import "./Radio.css";

function Radio(props) {
  return (
    <div className="radio-form-div">
      <div className="game-mode-div">Game Mode: {props.gameMode}</div>
      <form className="radio-form">
        <div className="radiobox">
          <label className="radio-container">
            Numbers
            <input
              type="radio"
              name="radio"
              value="Numbers"
              onChange={props.onChange}
              defaultChecked
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className="radiobox">
          <label className="radio-container">
            Picture
            <input
              type="radio"
              name="radio"
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
