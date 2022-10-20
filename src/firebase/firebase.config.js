// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGyFnxJVSNrXQ1W91nsiFeTndDZYKrDA",
  authDomain: "my-dragon-news.firebaseapp.com",
  projectId: "my-dragon-news",
  storageBucket: "my-dragon-news.appspot.com",
  messagingSenderId: "611596928279",
  appId: "1:611596928279:web:6f1bf11e2ca808aa336352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;