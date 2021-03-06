/* eslint-disable default-case */
import React from 'react';

const Player = ({ hidden, rounds, setRounds, handMove, setHandMove, setPlayerHand, rating, setRating, computerHand }) => {

    const handMoveClicked = (e) => {
        let computerMove = '';
        let playerMove = e.target.alt;
        setRounds({ ...rounds, roundsPlayed: rounds.roundsPlayed + 1 })

        if(playerMove == 'scissors'){
            setPlayerHand({ rock: false, paper: false, scissors: true });
            setRating({
                ...rating,
                paperRating: rating.paperRating - 0.1,
                rockRating: rating.rockRating + 0.1
            });
        }
        if(playerMove == 'paper'){
            setPlayerHand({ rock: false, paper: true, scissors: false });
            setRating({
                ...rating,
                paperRating: rating.rockRating - 0.1,
                rockRating: rating.scissorsRating + 0.1
            });
        }
        if(playerMove == 'rock'){
            setPlayerHand({ rock: true, paper: false, scissors: false });
            setRating({
                ...rating,
                paperRating: rating.paperRating + 0.1,
                scissorsRating: rating.scissorsRating - 0.1
            });
        }
        //Tar namnet på det värdet i objektet som är sant och tilldelar till computerMove
        for (const property in computerHand) {
            if(computerHand[property] === true){
                computerMove = property;
            }
        }
        setHandMove({ player: playerMove, computer: computerMove });
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