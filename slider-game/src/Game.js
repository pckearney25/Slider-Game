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
      ],
      boardSquares: [],
      move: 0,
      message: "Order the squares as shown to complete a game.",
      button: [
        {
          message: "Start Game",
          styles: { color: "white", background: "green" }
        },
        {
          message: "Reset Game",
          styles: { color: "white", background: "red" }
        }
      ]
    };
  }

  handleClick1() {
    let move = this.state.move;
    if (move === 0) {
      const boardSquares = shuffleArray(this.state.squares);
      this.setState({
        boardSquares: boardSquares,
        move: move + 1,
        message:
          "Click to move an adjacent numbered square into the empty position."
      });
      //START THE STOPWATCH.
    } else {
      this.setState({
        move: 0,
        message: "Order the squares as shown to complete a game."
      });
    }
  }

  handleClick2(i) {
    let boardSquares = this.state.boardSquares;
    const checkArray = boardSquares.map(x => x.value);
    const move = this.state.move;
    const first = i;
    const second = checkArray.indexOf(9);
    const check = JSON.stringify([first, second]);
    const adjacent = [
      "[0,1]",
      "[0,3]",
      "[1,0]",
      "[1,2]",
      "[1,4]",
      "[2,1]",
      "[2,5]",
      "[3,0]",
      "[3,4]",
      "[3,6]",
      "[4,1]",
      "[4,3]",
      "[4,5]",
      "[4,7]",
      "[5,2]",
      "[5,4]",
      "[5,8]",
      "[6,3]",
      "[6,7]",
      "[7,4]",
      "[7,6]",
      "[7,8]",
      "[8,5]",
      "[8,7]"
    ];

    if (move !== 0 && adjacent.indexOf(check) !== -1) {
      console.log("Adjacent!");
      const newSquares = boardSquares.slice();
      newSquares[first] = boardSquares[second];
      newSquares[second] = boardSquares[first];
      this.setState({
        move: move + 1,
        boardSquares: newSquares
      });
    }
  }

  render() {
    let move = this.state.move;
    const message = this.state.message;
    const button = move > 0 ? this.state.button[1] : this.state.button[0];
    const boardSquares =
      move > 0 ? this.state.boardSquares : this.state.squares;

    return (
      <div className="Game">
        <div className="game">
          <div className="game-board">
            <Board squares={boardSquares} onClick={i => this.handleClick2(i)} />
          </div>
          <div className="game-info">
            <div>{message}</div>
            <div>
              {
                //Want to add a stopwatch here
              }
              STOPWATCH
            </div>
            <button
              style={button.styles}
              onClick={() => {
                this.handleClick1();
              }}
            >
              {button.message}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

const shuffleArray = anArray => {
  const anArrayLength = anArray.length;
  let shuffledArray = [];

  //array of position numbers to shuffle
  let array = [];

  for (let i = 0; i < anArrayLength; i++) {
    array.push(i);
  }

  // next we swap the numbers in the array we created.
  //the swaps MUST involve the value of the last square in the input array (anArray)
  for (let i = 0; i < Math.pow(array.length, 2); i++) {
    let blankSquare = array.indexOf(anArrayLength - 1);
    let swapSquare;
    if (blankSquare % 2 === 0) {
      //the swapSquare must be odd!
      swapSquare = Math.floor(Math.random() * 4) * 2 + 1;
    } else {
      //the swapSquare must be even!
      swapSquare = Math.floor(Math.random() * 5) * 2;
    }
    [array[blankSquare], array[swapSquare]] = [
      array[swapSquare],
      array[blankSquare]
    ];
  }

  //next we populate the shuffledArray with the values of the input array (anArray)
  for (let i = 0; i < anArrayLength; i++) {
    shuffledArray.push(anArray[array[i]]);
  }
  return shuffledArray;
};
