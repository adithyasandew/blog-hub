// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-hub-b7da2.firebaseapp.com",
  projectId: "blog-hub-b7da2",
  storageBucket: "blog-hub-b7da2.appspot.com",
  messagingSenderId: "662230885498",
  appId: "1:662230885498:web:86d65c1f88b83c090487c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
