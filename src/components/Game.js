//Import the React library and the Board component from the specified path.
import React, { useState } from 'react'
import Board from './Board'

// Define the Game functional component
const Game = () => {
  // State hooks to manage the state of the squares array and player turn
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  // Handle click event for the squares
  const handleClick = (index) => {
    // If there's a winner or the square is already filled, do nothing
    if (calculateWinner(squares) || squares[index]) {
      return
    }

    // Clone the current squares array and update the clicked square
    const newSquares = squares.slice()
    newSquares[index] = isXNext ? 'X' : 'O'

    // Update the state with the new squares and toggle player turn
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }

  // Determine the winner based on the current squares
  const winner = calculateWinner(squares)

  // Set the game status message based on the winner, game state, or player turn
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (squares.every((square) => square)) {
    status = 'Cats game!'
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`
  }

  // Handle click event for the restart button
  const handleRestart = () => {
    // Reset the squares array and player turn
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }

  // Return JSX for the Game component
  return (
    <div className="game">
      {/* Display the game status */}
      <div className="status">{status}</div>

      {/* Render the Board component with squares and click handler */}
      <Board squares={squares} onClick={handleClick} />

      {/* Always render the restart button */}
      <button className="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  )
}

// Helper function to calculate the winner
const calculateWinner = (squares) => {
  // Implementation of winning logic
  // Return 'X', 'O', or null
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

// Export the Game component as the default export
export default Game
