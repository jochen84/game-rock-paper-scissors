import React, {useState, useEffect} from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  const [handMove, setHandMove] = useState({
    player: '',
    computer: ''
  });
  const [rounds, setRounds] = useState({ 
    roundsPlayed: 0,
    totalRounds: 0
  });
  const [score, setScore] = useState({
    playerScore: 0,
    tie: 0,
    computerScore: 0
  });

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

  useEffect(() => {
    //Vad körs igång när spelet startas!
  })

  return (
    <div className="App">
      <Gameboard rounds={rounds} setRounds={setRounds} score={score} handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} computerHand={computerHand} setPlayerHand={setPlayerHand}/>
    </div>
  );
}

export default App;
