import React, { useState, useEffect, useRef } from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({ winner, setWinner, rounds, setRounds, score, setScore, handMove, setHandMove, playerHand, setPlayerHand, computerHand, setComputerHand, rating, setRating }) => {
    //Används för att dölja <element>
    const [hidden, setHidden] = useState(false);
    const [resetHidden, setResetHidden] = useState(true);

    //Sätter antal rundor man vill spela till numret som finns i texten man klickar
    const setRoundsToPlay = (e) => {
        setRounds({ ...rounds, totalRounds: e.target.innerText });
    }

    //Körs varje ny runda
    //Annorlunda förstakörning, då inga resultat ska visas
    const firstRun = useRef(true);
    useEffect(() => {
        if (firstRun.current) {
            computerAIHand();
            firstRun.current = false;
            return;
        } else {
            computerAIHand();
            winnerMoves();
        }
    }, [rounds.roundsPlayed]);

    //Kör endast när score ändras, visa vinnare
    useEffect(() => {
        whosTheWinner();
    }, [score]);

    //Beräkna och sätt datorns val
    const computerAIHand = () => {
        setRating({
            ...rating,
            rockRating: rating.rockRating * 0.95,
            paperRating: rating.paperRating * 0.95,
            scissorsRating: rating.scissorsRating * 0.95
        });

        let randomNumber = Math.random() * (Math.exp(rating.rockRating) +
            Math.exp(rating.scissorsRating) + Math.exp(rating.paperRating));

        if (randomNumber < Math.exp(rating.rockRating)) {
            setComputerHand({ rock: true, paper: false, scissor: false });
            return;
        }
        else if (randomNumber < Math.exp(rating.rockRating) + Math.exp(rating.paperRating)) {
            setComputerHand({ rock: false, paper: true, scissor: false });
            return;
        }
        else if (!(randomNumber < Math.exp(rating.rockRating)) &&
            !(randomNumber < Math.exp(rating.rockRating) + Math.exp(rating.paperRating))) {
            setComputerHand({ rock: false, paper: false, scissor: true });
        }
    }

    //Sätt poäng på spelare, dator eller oavgjort
    const winnerMoves = () => {
        if (JSON.stringify(playerHand) === JSON.stringify(computerHand)) {
            setScore({ ...score, tie: score.tie + 1 });
        }
        else if (playerHand.rock && computerHand.scissor) {
            setScore({ ...score, playerScore: score.playerScore + 1 })
        }
        else if (computerHand.rock && playerHand.scissor) {
            setScore({ ...score, computerScore: score.computerScore + 1 })
        }
        else if (playerHand.scissor && computerHand.paper) {
            setScore({ ...score, playerScore: score.playerScore + 1 })
        }
        else if (computerHand.scissor && playerHand.paper) {
            setScore({ ...score, computerScore: score.computerScore + 1 })
        }
        else if (playerHand.paper && computerHand.rock) {
            setScore({ ...score, playerScore: score.playerScore + 1 })
        }
        else if (computerHand.paper && playerHand.rock) {
            setScore({ ...score, computerScore: score.computerScore + 1 })
        }
    }

    //Bestäm vinnare, eller om det blev oavgjort
    const whosTheWinner = () => {
        let playerWin = '<-Player WON';
        let computerWin = 'Computer WON->';
        let tie = '<-TIE->';

        if (rounds.roundsPlayed == rounds.totalRounds) {
            if (score.playerScore > score.computerScore) {
                setWinner(playerWin);
            }
            else if (score.computerScore > score.playerScore) {
                setWinner(computerWin);
            } else {
                setWinner(tie);
            }
            if (rounds.roundsPlayed > 0) {
                setHidden(!hidden);
                setResetHidden(false);
            }
        }
    }

    const resetGame = () => {
        document.location.reload();
    }

    return (
        <div className="gameboard-header">
            <h1>Welcome to Rock Scissors Paper</h1>

            {/*Dölj DIV när antal runder valts eller när man tryckt på start */}
            <div className={hidden || !resetHidden ? "hidden" : ""}>
                <h3>How many rounds would you like to play?</h3>
                <div className="rounds-amount">
                    <button onClick={setRoundsToPlay}>1</button>
                    <button onClick={setRoundsToPlay}>3</button>
                    <button onClick={setRoundsToPlay}>5</button>
                    <button onClick={setRoundsToPlay}>10</button>
                </div>

                <br></br>
                <button onClick={() => setHidden(!hidden)} className="start-game">Choose rounds then START GAME</button>
            </div>
            <button className={`${resetHidden ? "hidden" : ""}`} onClick={resetGame}>Restart</button>
            <hr></hr>
            {/*Ta fram DIV när man tryckt på start */}
            <h1>{(rounds.roundsPlayed > 0 && rounds.roundsPlayed == rounds.totalRounds ? winner : '')}</h1>
            <div className={`player-section-header ${hidden ? "" : "hidden"}`}>
                <h1>Rounds {rounds.roundsPlayed}/{(rounds.totalRounds == 0 ? '***' : rounds.totalRounds)}</h1>
            </div>
            <div className="players-section">
                <Player hidden={hidden} rounds={rounds} setRounds={setRounds} handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} setPlayerHand={setPlayerHand} rating={rating} setRating={setRating} computerHand={computerHand} />
                <Scoreboard score={score} />
                <Computer hidden={hidden} handMove={handMove} score={score} />
            </div>
        </div>
    )

}

export default Gameboard;