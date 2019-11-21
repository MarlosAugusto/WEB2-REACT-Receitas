import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTGh1TGOdAGPOAwgvX-KYro3ZmUyh65vA",
  authDomain: "receitas-web2react.firebaseapp.com",
  databaseURL: "https://receitas-web2react.firebaseio.com",
  projectId: "receitas-web2react",
  storageBucket: "receitas-web2react.appspot.com",
  messagingSenderId: "592954266495",
  appId: "1:592954266495:web:1a4555e0c528c9b3dd404a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter >, document.getElementById('root'));
/* eslint-disable comma-dangle */
