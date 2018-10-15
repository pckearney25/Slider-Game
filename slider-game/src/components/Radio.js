import React from "react";

function Radio(props) {
  return (
    <form className="radio-form">
      <h5>Game Mode: {props.gameMode}</h5>
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
  );
}

export default Radio;

//let gameModes = Array.from(document.getElementsByName("genderS")).find(
//r => r.checked).value;
