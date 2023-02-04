// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlkMBwJYxcMnivsuLojuPL2x8Ro4hG9U",
  authDomain: "bicycle-management-a8f43.firebaseapp.com",
  projectId: "bicycle-management-a8f43",
  storageBucket: "bicycle-management-a8f43.appspot.com",
  messagingSenderId: "663518544940",
  appId: "1:663518544940:web:556088e44802367e6cfd89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;