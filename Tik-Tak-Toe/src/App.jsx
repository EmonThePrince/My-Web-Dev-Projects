import { useState,useEffect} from 'react'

function Square({player,setPlayer}){
  return (
    <button className='square text-gray-300'
      onClick={setPlayer}
    >
      {player}
    </button>
  )
}
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({player,isRestarted}){
  const [isNextX, setIsNextX] = useState(true);
  //const [status,setStatus] = useState("Next Player: X");
  let status = "Next Player: X";
  function handleClick(boardNumber){
    if(!player.currentPlayer[boardNumber] && !calculateWinner(player.currentPlayer)){
      const nextSquares = player.currentPlayer.slice();
      if(isNextX){
        nextSquares[boardNumber] = "X";
      }
      else{
        nextSquares[boardNumber] = "O";
      }
      setIsNextX(!isNextX);
      player.setCurrentPlayer(nextSquares);
    }
  }
  if(calculateWinner(player.currentPlayer)){
    status = "Winner: " + ((isNextX)? "O":"X");
  }
  else{
    status = "Next Player: " + ((isNextX)? "X":"O");
  }
  function restart(){
    setCurrentPlayer(Array(9).fill(null));
  }

  let ok = 0;
  player.currentPlayer.map((square)=>{
    if(square) ok++;
  });
  if(ok==9 ) status = "Draw";
  
  useEffect(() => {
      player.setCurrentPlayer(Array(9).fill(null));
      setIsNextX(true);
  }, [isRestarted]);
  return (
    <>
      <div className='flex justify-center'>
        <Square player = {player.currentPlayer[0]} setPlayer = {()=>{handleClick(0)}}/>
        <Square player = {player.currentPlayer[1]} setPlayer = {()=>{handleClick(1)}}/>
        <Square player = {player.currentPlayer[2]} setPlayer = {()=>{handleClick(2)}}/>
      </div>
      <div className='flex justify-center'>
        <Square player = {player.currentPlayer[3]} setPlayer = {()=>{handleClick(3)}}/>
        <Square player = {player.currentPlayer[4]} setPlayer = {()=>{handleClick(4)}}/>
        <Square player = {player.currentPlayer[5]} setPlayer = {()=>{handleClick(5)}}/>
      </div>
      <div className='flex justify-center'>
        <Square player = {player.currentPlayer[6]} setPlayer = {()=>{handleClick(6)}}/>
        <Square player = {player.currentPlayer[7]} setPlayer = {()=>{handleClick(7)}}/>
        <Square player = {player.currentPlayer[8]} setPlayer = {()=>{handleClick(8)}}/>
      </div>
      <div className='flex justify-center mt-2 text-white'>
        {status}
      </div>
    </>
  )
}

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(Array(9).fill(null));
  const [restarted,setRestarted] = useState(false);
  function restart(){
    setRestarted(!restarted);
  }
  return (
    <>
    <div className='w-full mt-4 mx-4 h-[200px]'>
      <div className='glow mb-12'>
        Tik-Tac-Toe 
      </div>
      <Board player = {{currentPlayer,setCurrentPlayer}} isRestarted = {restarted}/>
      <div className='flex justify-center mt-4'>
        <button className='neon-btn' onClick={restart} >Restart</button>
      </div>
      
    </div>
    </>
  )
}

export default App
