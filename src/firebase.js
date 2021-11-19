// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBL0LH6ojx04kHnXJUPawhg3e5SXx_8uRo',
  authDomain: 'clone-5b579.firebaseapp.com',
  projectId: 'clone-5b579',
  storageBucket: 'clone-5b579.appspot.com',
  messagingSenderId: '121013595091',
  appId: '1:121013595091:web:cadec57af3ff3c500edd26',
  measurementId: 'G-7VWJYVVKWZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
