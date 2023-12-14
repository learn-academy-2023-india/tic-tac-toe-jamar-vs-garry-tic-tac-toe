// Import the React library.
import React from 'react'

// Define the Square functional component
const Square = ({ value, onClick }) => {
  // Return JSX for the Square component
  return (
    // Button element representing a square on the game board
    <button className="square" onClick={onClick}>
      {/* Display the value of the square ('X', 'O', or null) */}
      {value}
    </button>
  )
}

// Export the Square component as the default export
export default Square
