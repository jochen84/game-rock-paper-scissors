/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';

const Computer = ({ handMove, score, hidden }) => {

    const [taunt, setTaunt] = useState('');

    useEffect(() => {
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                setTaunt('Pure luck!');
                break;
            case 1:
                setTaunt('You´re cheating!');
                break;
            case 2:
                setTaunt('Nooo!');
                break;
        }
    }, [score.playerScore]);

    useEffect(() => {
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                setTaunt('Ha ha!');
                break;
            case 1:
                setTaunt('You´ll never beat me!');
                break;
            case 2:
                setTaunt('Nice try!');
                break;
        }
    }, [score.computerScore]);

    useEffect(() => {
        setTaunt('Hmm....');
    }, [score.tie]);

    return (
        <div>
            <div className="avatar">
                <img src="/media/computer.png" width="110px" alt="comp"></img>
            </div>
            <div className="choosen-hand-move">
                <img className="hand-image" alt="" src={`/media/${handMove.computer}.png`} width="200"></img>
            </div>
            {/*Visa DIV när man tryckt på Start - Dölj när rundor är spelade*/}
            <div className={`computer-taunt ${hidden ? "" : "hidden"}`}>
                <h2>{taunt}</h2>
            </div>
        </div>
    )
}

export default Computer;