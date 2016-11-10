import { observable } from 'mobx'
// import { database } from '../db/firebase'
import { auth } from '../db/firebase'

class UserStore {
  @observable currentUser = {}

  constructor() {
    // this.addUser = this.addUser.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.onAuthStateChanged = this.onAuthStateChanged.bind(this)
    this.logout = this.logout.bind(this)
    if (auth.currentUser) {
      this.currentUser = auth.currentUser
    }
  }

  // addUser(user) {
  //   const timestamp = Date.now();
  //   const userId = `user-${timestamp}`

  //   database.ref(`chatapp/users/${userId}`).set(
  //     user
  //   )
  // }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    auth.signInWithPopup(provider).then((authData) => this.authHandler(authData))
  }

  authHandler(authData) {
    this.currentUser = authData.user
  }

  onAuthStateChanged() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({user})
      }
    });
  }

  logout() {
    auth.signOut()
    this.currentUser = {}
  }
}

class UserStoreFactory {
  stores = {}

  getStore() {
    this.stores = new UserStore()
    return this.stores
  }

}

const userStoreFactory = new UserStoreFactory()
export default userStoreFactory
