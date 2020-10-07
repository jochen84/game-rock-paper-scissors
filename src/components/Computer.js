import React from 'react';

const Computer = ({ handMove }) => {

    console.log("DENNA LIGGER I BOTTEN PÅ ***COMPUTER.JS***")
    return (
        <div>
            <div className="avatar">
                <img src="/media/computer.png" width="110px" alt="comp"></img>
            </div>
            <div className="choosen-hand-move">
                <img className="hand-image" alt="" src={`/media/${handMove.computer}.png`} width="350"></img>
            </div>
            <div className="computer-taunt">
                <h1>Good luck</h1>
            </div>
        </div>
    )
}

export default Computer;