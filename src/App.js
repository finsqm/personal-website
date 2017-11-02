import React, { Component } from 'react'
// import LandingPage from './LandingPage'
import './App.css'
import BioPage from './BioPage'

const LANDING = 'LANDING'

class App extends Component {
  constructor () {
    super()
    this.state = {
      position: LANDING
    }
  }

  render () {
    return (
      <div className='App'>
        {/* <LandingPage /> */}
        <BioPage />
      </div>
    )
  }
}

export default App
