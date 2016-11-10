import React from 'react'
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to ReactChat</h2>
    </div>
  )
}

export default Header
