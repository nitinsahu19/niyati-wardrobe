// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD3_JML37Vl2YFbmNiRA-ztbnF3IpZIykM",
  authDomain: "niyati-wardrobe-db.firebaseapp.com",
  projectId: "niyati-wardrobe-db",
  storageBucket: "niyati-wardrobe-db.appspot.com",
  messagingSenderId: "145424259697",
  appId: "1:145424259697:web:4574738cb3e89c21f3d9d0",
  measurementId: "G-5W88ZDM5W3",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Set up authentication and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Google sign-in provider setup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Function to sign in with Google
const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export necessary variables
export { auth, firestore, signInWithGoogle };
