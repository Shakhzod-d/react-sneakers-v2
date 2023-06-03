// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAefMqYnbLCs5YW2aXAJd1I6kMnSkycpOw',
  authDomain: 'sneakers-bce44.firebaseapp.com',
  projectId: 'sneakers-bce44',
  storageBucket: 'sneakers-bce44.appspot.com',
  messagingSenderId: '299499264907',
  appId: '1:299499264907:web:ec2ee405ebcd61fdd5ed8e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
