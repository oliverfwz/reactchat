import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatBox />
      </div>
    );
  }
}

export default App;
