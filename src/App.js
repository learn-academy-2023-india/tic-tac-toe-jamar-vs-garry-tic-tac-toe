// Import the React library and the Game component from the specified path
import React from 'react'
import Game from './components/Game'
// Imports styles from the App.css file
import './App.css'

// Defines the App functional Component 
const App = () => {
  // Returns the JSX for the App component
  return (
    // Main container for the App
    <div className="app">
      {/* Heading for the app */}
      <h1>Tic Tac Toe</h1>

      {/* Renders the Game component */}
      <Game />
    </div>
  )
}

// Export the App component as the default export
export default App
