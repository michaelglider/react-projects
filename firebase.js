// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import{ getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrf8pvBzyYuovNi6pR6zSUOhdDDgrKEno",
  authDomain: "chat-app-a34b5.firebaseapp.com",
  projectId: "chat-app-a34b5",
  storageBucket: "chat-app-a34b5.appspot.com",
  messagingSenderId: "799390834281",
  appId: "1:799390834281:web:c084b82838622089310cf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()