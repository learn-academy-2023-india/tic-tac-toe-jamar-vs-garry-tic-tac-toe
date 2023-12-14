// Import the React library and the Square component from the specified path
import React from 'react'
import Square from './Square'

// Define the Board functional component
const Board = ({ squares, onClick }) => {
  // Return JSX for the Board component
  return (
    // Main container for the board
    <div className="board">
      {/* Map through the squares array and render Square components */}
      {squares.map((square, index) => (
        /* Render individual Square component with a unique key and onClick handler */
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  )
}

// Export the Board component as the default export
export default Board
