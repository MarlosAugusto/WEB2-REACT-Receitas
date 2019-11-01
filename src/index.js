import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeT2Rn5oOE_JgGoF-APeM801E6EscSLZY",
  authDomain: "projetoutfpr-appantigo.firebaseapp.com",
  databaseURL: "https://projetoutfpr-appantigo.firebaseio.com",
  projectId: "projetoutfpr-appantigo",
  storageBucket: "projetoutfpr-appantigo.appspot.com",
  messagingSenderId: "1090604264681",
  appId: "1:1090604264681:web:d4b888bd5505e2c492d478"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
/* eslint-disable comma-dangle */
