import { useState, useEffect } from 'react'

import './App.css'
import Square from './components/Square';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  // this array manage board cells
  const initial_board: string[] = new Array(9).fill('');

  //this carry the cells state
  const [board, setBoard] = useState(initial_board);

  //It works to take controll of the players turn
  const players = {
    X: '⭐',
    O: '❄',
  };

  // this carry the players state
  const [currentPlayer, setCurrentPlayer] = useState(players.X)

  //those are the poosible win conbinations
  const windCombination: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // this function is called in every play to check if there is winner
  function checkWinner() {

    for (const combo of windCombination) {

      const [a, b, c] = combo;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a] // encuentra un ganador y termina el buble
      }

    }

    //no hay ganador
    return null
  }

    // this function is called in every play to check if tthe game finished => all cells are fill
  function checkEndGame() {

    //every verifica si todos los elementos cumplen una condicion true/ false
    return board.every((cell) => cell !== "");

  }

  // clear all board position and put '' in all of them
  function clearBoard() {
    const newBoard = Array(9).fill('');

    setBoard(newBoard);
  }

  // this function works to put the player play and validate if there is winner or the game ended
  function updateBoard(index: number) {


    if (board[index]) return

    const newBoard: string[] = [...board]

    newBoard[index] = currentPlayer;

    setBoard(newBoard);


    setCurrentPlayer(currentPlayer === players.X ? players.O : players.X);



  };

  // this hooks carry the state of the win and ties counters
  const [xWinCounter, setXwinCounter] = useState(0);
  const [tiesCounter, setTiesCounter] = useState(0);
  const [yWinCounter, setYwinCounter] = useState(0);


  // this funtion works when the board changes, and validate who is the winner 
  useEffect(() => {
    const winner = checkWinner();
    const endGame = checkEndGame();

    if (winner !== null) {

      setTimeout(() => {
        alert(`THE WINNER IS ${winner}`);
      
        if(winner === '⭐') setXwinCounter(prev => prev + 1);

        else setYwinCounter(prev => prev + 1)
    
        clearBoard(); // Se limpia después de mostrar el mensaje del ganador
      }, 1);

    }
    else if (endGame) {

      setTimeout(() => {

        alert(`There is not winner, try it again`);
        setTiesCounter(prevCounter => prevCounter + 1);
        clearBoard();
      }, 1);
    }
  }, [board])



  



  return (
    <>

    <Header currentPlayer={currentPlayer} clearBoard={clearBoard}></Header>

      <main>

        <div className='board'>

          {
            board.map((element, index) => {



              return (

                <Square updateBoard={updateBoard} key={index} index={index}>  {element}  </Square>


              )
            })
          }

        </div>


        <Footer xWinCounter={xWinCounter} tiesCounter={tiesCounter} yWinCounter={yWinCounter}></Footer>


      </main>

    </>
  )
}

export default App
