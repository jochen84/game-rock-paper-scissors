import React, { useState, useEffect, useRef } from 'react';

const Scoreboard = ({ score }) => {

    const [roundWinner, setRoundWinner] = useState('')

    //Visa vem som vann senaste rundan
    //Baserad på ändringar i score
    //Körs ej första gången score renderas
    const isFirst = useRef(true);
    useEffect(() => {
        if (isFirst.current) {
            return;
        } else {
            setRoundWinner('<--- Player got this');
        }
    }, [score.playerScore]);

    useEffect(() => {
        if (isFirst.current) {
            return;
        } else {
            setRoundWinner('Computer got this --->');
        }
    }, [score.computerScore]);

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
        } else {
            setRoundWinner('>-- TIE --<');
        }
    }, [score.tie]);

    console.log("DENNA LIGGER I BOTTEN PÅ ***SCOREBOARD.JS***")
    return (
        <div className="scoreboard">
            <h1>{score.playerScore}</h1>
            <p>Player</p>
            <h1>{score.tie}</h1>
            <p>Tie</p>
            <h1>{score.computerScore}</h1>
            <p>Computer</p>
            <hr></hr>
            <h2>{roundWinner}</h2>
        </div>
    )
}

export default Scoreboard;