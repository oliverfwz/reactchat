import React from 'react'
import Message from './Message'
import AddMessageForm from './AddMessageForm'
import firebase from 'firebase/app'
import messageStore from '../stores/Message'
import userStore from '../stores/User'
import { observer } from 'mobx-react'

@observer class ChatBox extends React.Component {
  componentWillMount() {
    this.store = messageStore.getStore()
    this.userStore = userStore.getStore()

    this.userStore.onAuthStateChanged()
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Chat with everybody</h2>
        <p>Sign in to continue!</p>
        <div>
          <button className="github" onClick={() => this.userStore.authenticate(new firebase.auth.GithubAuthProvider())}>Log In with Github</button>
        </div>
        <div>
          <button className="facebook" onClick={() => this.userStore.authenticate(new firebase.auth.FacebookAuthProvider())} >Log In with Facebook</button>
        </div>
        <div>
          <button className="twitter" onClick={() => this.userStore.authenticate(new firebase.auth.TwitterAuthProvider())} >Log In with Twitter</button>
        </div>
      </nav>
    )
  }

  render() {
    const {currentUser} = this.userStore
    const logout = <button onClick={this.userStore.logout}>Log Out!</button>

    if(!currentUser.uid) {
      return <div>{this.renderLogin()}</div>
    }
    
    return (
      <div className="ChatBox">
        <div className="box-message">
          {
            Object
              .keys(this.store.messages)
              .map((key) => <Message key={key} details={this.store.messages[key]} />)
          }
        </div>
        <AddMessageForm addMessage={this.store.addMessage} uid={currentUser.uid} />
        {logout}
      </div>
    )
  }
}

export default ChatBox