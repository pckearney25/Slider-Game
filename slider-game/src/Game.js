import React from "react";
import Board from "./components/Board";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        { value: 1, background: "white" },
        { value: 2, background: "white" },
        { value: 3, background: "white" },
        { value: 4, background: "white" },
        { value: 5, background: "white" },
        { value: 6, background: "white" },
        { value: 7, background: "white" },
        { value: 8, background: "white" },
        { value: 9, background: "black" }
      ]
    };
  }

  render() {
    const boardSquares = shuffleArray(this.state.squares);
    return (
      <div className="Game">
        <div className="game">
          <div className="game-board">
            <Board squares={boardSquares} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

//Modified Durstenfield shuffle
//h/t https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = anArray => {
  let array = anArray.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
};
