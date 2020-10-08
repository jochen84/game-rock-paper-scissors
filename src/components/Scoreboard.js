import React, { useState, useEffect, useRef } from 'react';

const Scoreboard = ({ score, isGameRunning }) => {

    const [roundWinner, setRoundWinner] = useState('')

    useEffect(() => {
        setRoundWinner('<--- Player got this');
    }, [score.playerScore]);
    useEffect(() => {
        setRoundWinner('Computer got this --->');
    }, [score.computerScore]);
    useEffect(() => {
        setRoundWinner('>-- TIE --<');
    }, [score.tie]);

    return (
        <div className="scoreboard">
            <h1>{score.playerScore}</h1>
            <p>Player</p>
            <h1>{score.tie}</h1>
            <p>Tie</p>
            <h1>{score.computerScore}</h1>
            <p>Computer</p>
            <hr></hr>
            <h2>{(score.playerScore > 0 || score.computerScore > 0 || score.tie > 0 ? roundWinner : '')}</h2>
        </div>
    )
}

export default Scoreboard;