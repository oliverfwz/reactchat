import React from 'react';

class AddMessageForm extends React.Component {
  createMessage(event) {
    event.preventDefault();

    const message = {
      content: this.content.value
    }
    
    this.props.addMessage(message);
    this.messageForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.messageForm = input} className="message-edit" onSubmit={(e) => this.createMessage(e)}>
        <input ref={(input) => this.content = input} type="text" placeholder="Text message..." />
        <button type="submit">+ Send</button>
      </form>
    )
  }
}

export default AddMessageForm;
