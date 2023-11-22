import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVX84ZTpsVw0Q7CVln79i9CuD1f2NHkaE",
  authDomain: "react-blog-bdfb8.firebaseapp.com",
  projectId: "react-blog-bdfb8",
  storageBucket: "react-blog-bdfb8.appspot.com",
  messagingSenderId: "571233699235",
  appId: "1:571233699235:web:3df1f7399713e3e14cc616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);