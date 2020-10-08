/* eslint-disable default-case */
import React from 'react';

const Player = ({ hidden, rounds, setRounds, handMove, setHandMove, setPlayerHand, rating, setRating, computerHand }) => {



    const handMoveClicked = (e) => {
        let move = e.target.alt;
        setRounds({ ...rounds, roundsPlayed: rounds.roundsPlayed + 1 });

        switch (move) {
            case "rock":
                setPlayerHand({ rock: true, paper: false, scissor: false });
                setRating({
                    ...rating,
                    paperRating: rating.paperRating + 0.1,
                    scissorsRating: rating.scissorsRating - 0.1
                });
                break;
            case "paper":
                setPlayerHand({ rock: false, paper: true, scissor: false });
                setRating({
                    ...rating,
                    rockRating: rating.rockRating - 0.1,
                    scissorsRating: rating.scissorsRating + 0.1
                });
                break;
            case "scissors":
                setPlayerHand({ rock: false, paper: false, scissor: true });
                setRating({
                    ...rating,
                    rockRating: rating.rockRating + 0.1,
                    paperRating: rating.paperRating - 0.1
                });
                break;
        }

        if (computerHand.rock) {
            setHandMove({ player: move, computer: 'rock' });
        }
        if (computerHand.paper) {
            setHandMove({ player: move, computer: 'paper' });
        }
        if (computerHand.scissor) {
            setHandMove({ player: move, computer: 'scissors' });
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
                    <img onClick={handMoveClicked} src="/media/rock.png" alt="rock" width="55" height="55"></img>
                </div>
                <div className="player-choice">
                    <img onClick={handMoveClicked} src="/media/paper.png" alt="paper" width="55" height="55"></img>
                </div>
                <div className="player-choice">
                    <img onClick={handMoveClicked} src="/media/scissors.png" alt="scissors" width="55" height="55"></img>
                </div>
            </div>
        </div>
    )
}

export default Player;