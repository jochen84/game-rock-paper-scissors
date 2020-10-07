import React, {useState, useEffect} from 'react';

const Scoreboard = ({score}) => {

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

  //Den kör alla 3 ovan vid start, lägger denna sist för att tömma "roundWinner" igen
  //Men känns som det är helt fel att göra så.
  useEffect(() => {
    setRoundWinner('');
  }, [])

  console.log("DENNA LIGGER I BOTTEN PÅ ***SCOREBOARD.JS***")
  return(
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