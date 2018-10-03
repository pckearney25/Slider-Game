import React from "react";

function Square(props) {
  return (
    <button
      className="square"
      style={{ background: props.background }}
      onClick={() => {
        alert("click");
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;
