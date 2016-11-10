import React from 'react'
import Message from './Message'
import AddMessageForm from './AddMessageForm'

class ChatBox extends React.Component {
  render() {
    const { messages, addMessage } = this.props
    
    return (
      <div className="ChatBox">
        <div className="box-message">
          {
            Object
              .keys(messages)
              .map((key) => <Message key={key} details={messages[key]} />)
          }
        </div>
        <AddMessageForm addMessage={addMessage} />
      </div>
    )
  }
}

export default ChatBox