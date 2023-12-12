// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAezqMIFMegeK8wrvmZse99qHXyU4WxMy8",
  authDomain: "project2-f09e7.firebaseapp.com",
  projectId: "project2-f09e7",
  storageBucket: "project2-f09e7.appspot.com",
  messagingSenderId: "1091987115632",
  appId: "1:1091987115632:web:553ed6659e17356a6aeeb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;