import { useState } from "react";
import Box from "../components/Box";
import "./App.css";

const btn = document.getElementsByClassName("button");

export default function App() {
  const [renderX, setRenderX] = useState(Array(9).fill(null));
  const [xIsIn, setXIsIn] = useState(true);

  function handleXIn(i) {
    if (renderX[i] || calculateWinner(renderX)) {
      return;
    }
    // check for value on each box and validate X or O is init.
    const boxWithSquare = renderX;
    xIsIn ? (boxWithSquare[i] = "X") : (boxWithSquare[i] = "O");
    setRenderX(boxWithSquare);
    setXIsIn(!xIsIn);
  }

  //define status of the (winner/next player) Text on the top of the Board.
  const winner = calculateWinner(renderX);
  let textArea;
  if (winner) {
    textArea = `مبروك يا : ${winner}`;
  } else {
    textArea = `اللي عليه الدور ${xIsIn ? "X" : "O"}`;
  }
  //reset button
  function resetGame() {
    setRenderX(Array(9).fill(null));
    textArea = `اللي عليه الدور ${setXIsIn(!xIsIn)}`;
    for (const winner of btn) {
      winner.classList.remove("winner");
    }
  }

  return (
    <>
      <div className="board">
        <h1>X-O بالعربي</h1>
        <div id="status">{textArea}</div>
        <div className="game-row">
          <Box value={renderX[0]} onPlay={() => handleXIn(0)} />
          <Box value={renderX[1]} onPlay={() => handleXIn(1)} />
          <Box value={renderX[2]} onPlay={() => handleXIn(2)} />
        </div>
        <div className="game-row">
          <Box value={renderX[3]} onPlay={() => handleXIn(3)} />
          <Box value={renderX[4]} onPlay={() => handleXIn(4)} />
          <Box value={renderX[5]} onPlay={() => handleXIn(5)} />
        </div>
        <div className="game-row">
          <Box value={renderX[6]} onPlay={() => handleXIn(6)} />
          <Box value={renderX[7]} onPlay={() => handleXIn(7)} />
          <Box value={renderX[8]} onPlay={() => handleXIn(8)} />
        </div>
        <br></br>
        <button onClick={resetGame} className="reset">
          لعبة جديدة
        </button>
      </div>
    </>
  );
}

//Calculate the Winner through this condition
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      btn[a].classList.add("winner");
      btn[b].classList.add("winner");
      btn[c].classList.add("winner");
      return squares[a];
    }
  }
  return null;
}
