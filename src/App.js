import React from 'react'
import Game from './components/Game'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Game />

import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

const App = () => {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const line of lines) {
      const [a, b, c] = line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true)

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return
    }

    const newBoard = board.slice()
    newBoard[index] = isNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsNext(!isNext)
  }

  const winner = calculateWinner(board)

  return (
    <div className="game">
      {winner ? <div>Winner: {winner}</div> : null}
      <Board squares={board} onClick={handleClick} />
    </div>
  )
}

export default App