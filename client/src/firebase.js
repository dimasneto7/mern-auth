// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-auth-d3aef.firebaseapp.com',
  projectId: 'mern-auth-d3aef',
  storageBucket: 'mern-auth-d3aef.appspot.com',
  messagingSenderId: '787178285028',
  appId: '1:787178285028:web:3867c68462b2c74c5d09f1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
