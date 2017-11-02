import React from 'react'

import FinlayMcAfee from './FinlayMcAfee'

import './LandingPage.css'

const click = () => {
  console.log('Click')
}

const LandingPage = () => (
  <div className='container'>
    <FinlayMcAfee />
    <a>
      <h2 onClick={click}>ENTER SITE</h2>
    </a>
  </div>
)

export default LandingPage
