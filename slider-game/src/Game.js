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
        { value: 9, background: "white" },
        { value: 10, background: "white" },
        { value: 11, background: "white" },
        { value: 12, background: "white" },
        { value: 13, background: "white" },
        { value: 14, background: "white" },
        { value: 15, background: "white" },
        { value: 16, background: "black" }
      ],
      boardSquares: [],
      move: 0,
      time: 0,
      gameComplete: false
    };
  }
  message = [
    "Order the squares as shown to complete a game.",
    "Click to move an adjacent numbered square into the empty position.",
    "Game Complete! Click button to play again."
  ];
  button = [
    {
      message: "Start Game",
      styles: { color: "white", background: "green" }
    },
    {
      message: "Reset Game",
      styles: { color: "white", background: "red" }
    },
    {
      message: "Play Again",
      styles: { color: "white", background: "green" }
    }
  ];

  intervalID;
  clockRunning = false;

  startTimer = () => {
    if (!this.clockRunning) {
      this.intervalId = setInterval(this.count, 1000);
      this.clockRunning = true;
    }
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
    this.clockRunning = false;
  };

  resetTimer = () => {
    this.setState({ time: 0 });
  };

  count = () => {
    let time = this.state.time;
    time++;
    this.setState({ time: time });
  };

  handleClick1() {
    let move = this.state.move;
    if (move === 0) {
      const boardSquares = shuffleArray(this.state.squares);
      this.setState({
        boardSquares: boardSquares,
        move: move + 1,
        gameComplete: false
      });
      this.startTimer();
    } else {
      this.setState({
        move: 0,
        time: 0
      });
      this.stopTimer();
      this.resetTimer();
    }
  }

  handleClick2(i) {
    let boardSquares = this.state.boardSquares;
    let lastSquare = boardSquares.length;
    const checkArray = boardSquares.map(x => x.value);
    const move = this.state.move;
    const first = i;
    const second = checkArray.indexOf(lastSquare);
    const check = JSON.stringify([first, second]);
    //would like to generalize this as well eventually.
    //for a 4X4 array
    const adjacentArray = [
      "[0,1]",
      "[0,4]",
      "[1,0]",
      "[1,2]",
      "[1,5]",
      "[2,1]",
      "[2,3]",
      "[2,6]",
      "[3,2]",
      "[3,7]",
      "[4,0]",
      "[4,5]",
      "[4,8]",
      "[4,7]",
      "[5,1]",
      "[5,4]",
      "[5,6]",
      "[5,9]",
      "[6,2]",
      "[6,5]",
      "[6,7]",
      "[6,10]",
      "[7,3]",
      "[7,6]",
      "[7,11]",
      "[8,4]",
      "[8,9]",
      "[8,12]",
      "[9,5]",
      "[9,8]",
      "[9,10]",
      "[9,13]",
      "[10,6]",
      "[10,9]",
      "[10,11]",
      "[10,14]",
      "[11,7]",
      "[11,10]",
      "[11,15]",
      "[12,8]",
      "[12,13]",
      "[13,9]",
      "[13,12]",
      "[13,14]",
      "[14,10]",
      "[14,13]",
      "[14,15]",
      "[15,11]",
      "[15,14]"
    ];

    if (move !== 0 && adjacentArray.indexOf(check) !== -1) {
      const newSquares = boardSquares.slice();
      newSquares[first] = boardSquares[second];
      newSquares[second] = boardSquares[first];

      let gameComplete = arraysEqual(newSquares, this.state.squares);
      if (gameComplete) {
        this.setState({
          gameComplete: gameComplete
        });
        this.stopTimer();
      }
      this.setState({
        move: move + 1,
        boardSquares: newSquares
      });
    }
  }

  render() {
    let move = this.state.move;
    let gameComplete = this.state.gameComplete;
    let message;
    let button;
    const convertedTime = timeConverter(this.state.time);

    if (move === 0) {
      button = this.button[0];
      message = this.message[0];
    }

    if (move !== 0 && !gameComplete) {
      button = this.button[1];
      message = this.message[1];
    }

    if (move !== 0 && gameComplete) {
      button = this.button[2];
      message = this.message[2];
    }

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
            <div>{convertedTime}</div>
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

//The shuffleArray function will work with any square board.
const shuffleArray = anArray => {
  const anArrayLength = anArray.length;
  const rootLength = Math.pow(anArrayLength, 0.5);
  let shuffledArray = [];

  //First create an array of numbers to shuffle
  //AND TWO ARRAYS corresponding to an evenSet and and oddSet
  // evenSet if row value i + column value j is even
  // oddSet if row value i + column value j is odd
  let numberArray = [];
  let evenSet = [];
  let oddSet = [];
  let count = 0;

  for (let i = 0; i < rootLength; i++) {
    for (let j = 0; j < rootLength; j++) {
      numberArray.push(count);
      if ((i + j) % 2 === 0) {
        evenSet.push(count);
      } else {
        oddSet.push(count);
      }
      count++;
    }
  }
  // Next swap the numbers in the numberArray we created.
  //the swaps MUST involve the position value of the last square in the input array (anArray)
  for (let i = 0; i < Math.pow(numberArray.length, 2); i++) {
    let blankSquare = numberArray.indexOf(anArrayLength - 1);
    let swapSquare;

    if (evenSet.includes(blankSquare)) {
      //the swapSquare must be in the oddSet!
      swapSquare = oddSet[Math.floor(Math.random() * oddSet.length)];
    } else {
      //the swapSquare must be in the evenSet!
      swapSquare = evenSet[Math.floor(Math.random() * evenSet.length)];
    }
    [numberArray[blankSquare], numberArray[swapSquare]] = [
      numberArray[swapSquare],
      numberArray[blankSquare]
    ];
  }
  //Finally populate the shuffledArray.
  for (let i = 0; i < anArrayLength; i++) {
    shuffledArray.push(anArray[numberArray[i]]);
  }
  return shuffledArray;
};

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const timeConverter = t => {
  let minutes = Math.floor(t / 60);
  let seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
};
