import React from 'react'
import Message from './Message'
import AddMessageForm from './AddMessageForm'
import firebase from 'firebase/app'
import { auth } from '../db/firebase'

class ChatBox extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      uid: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({user})
      }
    });
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    auth.signInWithPopup(provider).then((authData) => this.authHandler(authData))
  }

  authHandler(authData) {
    this.setState({
      uid: authData.user.uid
    });
  }

  logout() {
    auth.signOut()
    this.setState({ uid: null });
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Chat with everybody</h2>
        <p>Sign in to continue!</p>
        <div>
          <button className="github" onClick={() => this.authenticate(new firebase.auth.GithubAuthProvider())}>Log In with Github</button>
        </div>
        <div>
          <button className="facebook" onClick={() => this.authenticate(new firebase.auth.FacebookAuthProvider())} >Log In with Facebook</button>
        </div>
        <div>
          <button className="twitter" onClick={() => this.authenticate(new firebase.auth.TwitterAuthProvider())} >Log In with Twitter</button>
        </div>
      </nav>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    const { messages, addMessage } = this.props

    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    
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
        {logout}
      </div>
    )
  }
}

export default ChatBox