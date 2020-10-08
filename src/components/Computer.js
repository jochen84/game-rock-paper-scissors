import React, {useEffect, useState} from 'react';

const Computer = ({handMove, score, hidden}) => {

const [taunt, setTaunt] = useState('')
useEffect(() => {
  console.log('TEST AV PLAYERSCORE');
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
}, [score.playerScore])
useEffect(() => {
  console.log('TEST AV COMPUTERSCORE');
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
}, [score.computerScore])
useEffect(() => {
  console.log('TEST AV TIE');
  setTaunt('Hmm....');
}, [score.tie])

  console.log("DENNA LIGGER I BOTTEN PÅ ***COMPUTER.JS***")
  return(
    <div>
      <div className="avatar">
        <img src="/media/computer.png" width="110px" alt="comp"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" alt="" src={`/media/${handMove.computer}.png`} width="350"></img>
      </div>
      <div className ={`computer-taunt ${hidden ? "" : "hidden"}`}>
        <h1>{taunt}</h1>
      </div>
    </div>
  )
>>>>>>> new-branch-not-to-mess-up
}

export default Computer;