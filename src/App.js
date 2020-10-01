import React, {useState, useEffect} from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

function App() {
  const [rounds, setRounds] = useState([1,3,5,10])
  const [score, setScore] = useState({playerScore: 0, tie: 0, computerScore: 0})
  const [hands] = useState(['/media/rock.png', '/media/paper.png', '/media/scissors.png'])


  return (
    <div className="App">
      <Gameboard rounds={rounds} setRounds={setRounds} score={score} hands={hands}/>
    </div>
  );
}

export default App;
