import React from 'react'

class Message extends React.Component {
  render() {
    const { details } = this.props;

    return (
      <div className="Message">
        {details.content}
      </div>
    )
  }
}

export default Message