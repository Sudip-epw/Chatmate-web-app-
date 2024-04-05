import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCiSkujOlbcgjgSI3bdGey52g3Am9TCSCY",
    authDomain: "chat-web-app-6ee3a.firebaseapp.com",
    databaseURL: "https://chat-web-app-6ee3a-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-6ee3a",
    storageBucket: "chat-web-app-6ee3a.appspot.com",
    messagingSenderId: "510017038011",
    appId: "1:510017038011:web:6396215ca973e8283c2b9e"
  };

  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();