import React from 'react';

const Player = ({ hidden, rounds, setRounds, handMove, setHandMove, setPlayerHand, rating, setRating, computerHand }) => {

    //Klicka hand sätter "den" till true
    const chooseRock = () => {
        setRounds({ ...rounds, roundsPlayed: rounds.roundsPlayed + 1 })
        setPlayerHand({ rock: true, paper: false, scissor: false });
        setRating({
            ...rating,
            paperRating: rating.paperRating + 0.1,
            scissorsRating: rating.scissorsRating - 0.1
        });

        if (computerHand.rock) {
            setHandMove({ player: 'rock', computer: 'rock' });
        }
        if (computerHand.paper) {
            setHandMove({ player: 'rock', computer: 'paper' });
        }
        if (computerHand.scissor) {
            setHandMove({ player: 'rock', computer: 'scissors' });
        }
    }

    const choosePaper = () => {
        setRounds({ ...rounds, roundsPlayed: rounds.roundsPlayed + 1 })
        setPlayerHand({ rock: false, paper: true, scissor: false });
        setRating({
            ...rating,
            rockRating: rating.rockRating - 0.1,
            scissorsRating: rating.scissorsRating + 0.1
        });

        if (computerHand.rock) {
            setHandMove({ player: 'paper', computer: 'rock' });
        }
        if (computerHand.paper) {
            setHandMove({ player: 'paper', computer: 'paper' });
        }
        if (computerHand.scissor) {
            setHandMove({ player: 'paper', computer: 'scissors' });
        }
    }

    const chooseScissor = () => {
        setRounds({ ...rounds, roundsPlayed: rounds.roundsPlayed + 1 })
        setPlayerHand({ rock: false, paper: false, scissor: true });
        setRating({
            ...rating,
            paperRating: rating.paperRating - 0.1,
            rockRating: rating.rockRating + 0.1
        });

        if (computerHand.rock) {
            setHandMove({ player: 'scissors', computer: 'rock' });
        }
        if (computerHand.paper) {
            setHandMove({ player: 'scissors', computer: 'paper' });
        }
        if (computerHand.scissor) {
            setHandMove({ player: 'scissors', computer: 'scissors' });
        }
    }

    return (
        <div>
            <div className="avatar">
                <img src="/media/player.png" width="110px" alt="head"></img>
            </div>
            <div className="choosen-hand-move">
                <img className="hand-image" alt="" src={`/media/${handMove.player}.png`} width="200"></img>
            </div>
            {/*Visa DIV när man tryckt på Start - Dölj när rundor är spelade*/}
            <div className={`player-choices ${hidden ? "" : "hidden"}`}>
                <div className="player-choice">
                    <img onClick={chooseRock} src="/media/rock.png" alt="rock" width="50" height="50"></img>
                </div>
                <div className="player-choice">
                    <img onClick={choosePaper} src="/media/paper.png" alt="paper" width="50" height="50"></img>
                </div>
                <div className="player-choice">
                    <img onClick={chooseScissor} src="/media/scissors.png" alt="scissors" width="50" height="50"></img>
                </div>
            </div>
        </div>
    )
}

export default Player;