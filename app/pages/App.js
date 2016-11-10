import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from '../components/Header'
import ChatBox from '../components/ChatBox'
import { database } from '../db/firebase'

class App extends Component {
  constructor() {
    super()

    this.addMessage = this.addMessage.bind(this)

    this.state = {
      messages: {}
    };
  }

  componentWillMount() {
    database.ref(`chatapp/messages`).on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        this.setState({ messages: snapshot.val() });
      }
    })
  }

  addMessage(message) {
    const messages = {...this.state.messages};
    const timestamp = Date.now();
    const messageId = `message-${timestamp}`

    messages[`${messageId}`] = message
    this.setState({ messages });
    database.ref(`chatapp/messages/${messageId}`).set(
      message
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatBox addMessage={this.addMessage} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
