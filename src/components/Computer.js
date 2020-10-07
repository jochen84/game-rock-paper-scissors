import React, {useEffect, useState} from 'react';

const Computer = ({handMove}) => {

  const [hidden, setHidden] = useState(false);
  //AI for choosing a random hand
  useEffect(() => {
    setHidden(!hidden)
  }, [handMove.player]);


  //AI for choosing a random hand

  return(
    <div>
      <div className="avatar">
        <img src="/media/computer.png" width="110px" alt="comp"></img>
      </div>
      <div className="choosen-hand-move">
        <img className={`hand-image ${hidden ? "hidden" : ""}`} src={`/media/${handMove.computer}.png`} width="350"></img>
      </div>
      <div className = "computer-taunt">
        <h1>Good luck</h1>
      </div>
    </div>
  )
}

export default Computer;