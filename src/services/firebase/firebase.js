import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBn4ttfbY-YPAtszrgvk9rTcsaLWnwGWHc",
    authDomain: "techgeekcomputacion.firebaseapp.com",
    projectId: "techgeekcomputacion",
    storageBucket: "techgeekcomputacion.appspot.com",
    messagingSenderId: "28844892964",
    appId: "1:28844892964:web:7e9140c512ae2ea05189b1"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const db = getFirestore(app);