import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

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

// Function to add a collection and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef); // Generates a new document reference
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Documents added to collection successfully!");
};

export const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map((doc) => {
    const { items, title } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Function to create or retrieve a user document in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

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
      console.error("Error creating user document:", error);
    }
  }

  return userRef;
};

// Google sign-in provider setup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export {
  auth,
  firestore,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
