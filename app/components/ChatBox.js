import React from 'react'
import Message from './Message'
import AddMessageForm from './AddMessageForm'

class ChatBox extends React.Component {
  render() {
    return (
      <div className="ChatBox">
        <div className="box-message">
          <Message />
        </div>
        <AddMessageForm addMessage={this.props.addMessage} />
      </div>
    )
  }
}

export default ChatBox