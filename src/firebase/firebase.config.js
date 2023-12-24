// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4_IZ_UlgyqDpLlcUBH6Y8T7ZAbaP4M38",
  authDomain: "privateroute-466d8.firebaseapp.com",
  projectId: "privateroute-466d8",
  storageBucket: "privateroute-466d8.appspot.com",
  messagingSenderId: "492074384582",
  appId: "1:492074384582:web:fcaaa40b221cb8acbfebc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
