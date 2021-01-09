import React, { Component } from 'react'
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        Component App 
        <br />
        <Link to='movies'>Movies</Link>
      </div>
    )
  }
}

export default App
