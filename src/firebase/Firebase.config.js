// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBshTcNl9m0MB4GygktTlWvCkeU5InyNFs",
  authDomain: "email-auth-password-7a961.firebaseapp.com",
  projectId: "email-auth-password-7a961",
  storageBucket: "email-auth-password-7a961.appspot.com",
  messagingSenderId: "512067127976",
  appId: "1:512067127976:web:764f87a25878a97ddad09d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 export default auth;