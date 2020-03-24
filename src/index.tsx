import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCF-s25_EqfZuS4tTJOaJvQApiy2_exBXw",
	authDomain: "kinja-wavelength.firebaseapp.com",
	databaseURL: "https://kinja-wavelength.firebaseio.com",
	projectId: "kinja-wavelength",
	storageBucket: "kinja-wavelength.appspot.com",
	messagingSenderId: "550511849728",
	appId: "1:550511849728:web:5784b700fe3e52494f83e5"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App database={firebase.database()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
