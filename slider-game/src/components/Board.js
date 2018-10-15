import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    if (this.props.gameMode === "Numbers") {
      return (
        <Square
          value={this.props.squares[i].value}
          style={this.props.squares[i].style1}
          onClick={() => this.props.onClick(i)}
        />
      );
    } else {
      return (
        <Square
          value={this.props.squares[i].value}
          style={this.props.squares[i].style2}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
