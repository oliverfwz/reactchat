import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'

class App extends Component {
  constructor() {
    super()

    this.addMessage = this.addMessage.bind(this)

    this.state = {
      messages: {}
    };
  }

  addMessage(message) {
    const messages = {...this.state.messages};
    const timestamp = Date.now();

    messages[`message-${timestamp}`] = message
    this.setState({ messages });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatBox addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
