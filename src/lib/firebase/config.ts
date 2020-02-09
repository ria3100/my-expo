import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig).auth()
  // .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
}

export default firebase
