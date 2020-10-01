import React, {useState, useEffect} from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  const [handMoves, setHandMoves] = useState(['rock', 'paper', 'scissors'])
  const [rounds, setRounds] = useState([1,3,5,10])
  const [score, setScore] = useState({
    playerScore: 0,
    tie: 0,
    computerScore: 0});

  const [playerHand, setPlayerHand] = useState({
    rock: false,
    paper: false,
    scissor: false
  });

  const [computerHand, setComputerHand] = useState({
    rock: false,
    paper: false,
    scissor: false
  });

  return (
    <div className="App">
      <Gameboard rounds={rounds} score={score} handMoves={handMoves} playerHand={playerHand} computerHand={computerHand} setPlayerHand={setPlayerHand}/>
    </div>
  );
}

export default App;
