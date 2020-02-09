import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA3nVHTEp8EnqrXBG7MuBn-W1fuk-WHDII',
  authDomain: 'pokedex-8ae3f.firebaseapp.com',
  databaseURL: 'https://pokedex-8ae3f.firebaseio.com',
  projectId: 'pokedex-8ae3f',
  storageBucket: 'pokedex-8ae3f.appspot.com',
  messagingSenderId: '1050448299793',
  appId: '1:1050448299793:web:56a2a216fc50cecbff2eb0',
  measurementId: 'G-YHYDRML6PC',
}

firebase.initializeApp(firebaseConfig)
