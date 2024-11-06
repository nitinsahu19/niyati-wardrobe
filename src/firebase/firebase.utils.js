import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Function to create or retrieve a user document in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  // Reference to the user document in Firestore
  const userRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  // If user document does not exist, create it
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  // Return userRef for further usage
  return userRef;
};

// Google sign-in provider setup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Function to sign in with Google
const signInWithGoogle = () => signInWithPopup(auth, provider);

export {
  auth,
  firestore,
  signInWithGoogle,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
