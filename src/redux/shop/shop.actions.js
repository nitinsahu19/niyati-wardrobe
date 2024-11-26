import { collection, getDocs } from "firebase/firestore";
import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    // Firestore reference to the "collections" collection
    const collectionRef = collection(firestore, "collections");

    dispatch(fetchCollectionsStart()); // Dispatch the start action to indicate loading state

    try {
      const snapshot = await getDocs(collectionRef); // Fetch documents
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot); // Convert snapshot to desired format
      dispatch(fetchCollectionsSuccess(collectionsMap)); // Dispatch success with the data
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message)); // Dispatch failure if an error occurs
    }
  };
};
