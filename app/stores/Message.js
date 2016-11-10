import { observable } from 'mobx'
import { database } from '../db/firebase'

class MessageStore {
  @observable messages = {}

  constructor() {
    this.addMessage = this.addMessage.bind(this)

    database.ref(`chatapp/messages`).on('value', (snapshot) => {
      this.messages = snapshot.val()
    })
  }

  addMessage(message) {
    const timestamp = Date.now();
    const messageId = `message-${timestamp}`

    this.messages = {
      ...this.messages,
      [messageId]: message
    }

    database.ref(`chatapp/messages/${messageId}`).set(
      message
    )
  }
}

class MessageStoreFactory {
  stores = {}

  getStore() {
    this.stores = new MessageStore()
    return this.stores
  }

}

const messageStoreFactory = new MessageStoreFactory()
export default messageStoreFactory
