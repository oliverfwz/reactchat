import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let config = {
    apiKey: "AIzaSyBxtUiAflpiO04MlO6EzB-AFt5nKW1EGGg",
    authDomain: "reactchat-12f5c.firebaseapp.com",
    databaseURL: "https://reactchat-12f5c.firebaseio.com"
};

firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
