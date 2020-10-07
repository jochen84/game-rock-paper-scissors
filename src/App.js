import React, { useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

function App() {
    //Används för att sätta winner till string 'Player WON' - 'Computer WON' - 'TIE'
    const [winner, setWinner] = useState('')

    //Används för att sätta bilden på vilken hand som används i spelomgången
    const [handMove, setHandMove] = useState({
        player: '',
        computer: ''
    });

    //Antal rundor, sätts med knapp innan spelet börjar, jämförs för att avsluta spelet
    const [rounds, setRounds] = useState({
        roundsPlayed: 0,
        totalRounds: 0
    });

    //Sätter poäng efter varje runda. Används för att se vinnare vid avslutat spel
    const [score, setScore] = useState({
        playerScore: 0,
        tie: 0,
        computerScore: 0
    });

    //Sätter valt drag till TRUE
    const [playerHand, setPlayerHand] = useState({
        rock: false,
        paper: false,
        scissor: false
    });

    //Datorns hand, beräknas fram i computerAIHand
    const [computerHand, setComputerHand] = useState({
        rock: false,
        paper: false,
        scissor: false
    });

    //För beräkning av datorns drag
    const [rating, setRating] = useState({
        rockRating: 0,
        paperRating: 0,
        scissorsRating: 0
    });

    const [winningTaunt, setWinningTaunt] = useState([
        "Ha ha!",
        "You'll never beat me!",
        "Nice try!"
    ]);

    const [losingTaunt, setlosingTaunt] = useState([
        "Pure luck!",
        "You're cheating!",
        "Nooo!"
    ]);

    console.log("DENNA LIGGER I BOTTEN PÅ ***APP.JS***")
    return (
        <div className="App">
            <Gameboard winner={winner} setWinner={setWinner} 
            rounds={rounds} setRounds={setRounds} 
            score={score} setScore={setScore}
            handMove={handMove} setHandMove={setHandMove} 
            playerHand={playerHand} setPlayerHand={setPlayerHand}
            computerHand={computerHand} setComputerHand={setComputerHand} 
            rating={rating} setRating={setRating}
            winningTaunt={winningTaunt} setWinningTaunt={setWinningTaunt}
            losingTaunt={losingTaunt} setlosingTaunt={setlosingTaunt} />
        </div>
    );
}

export default App;
