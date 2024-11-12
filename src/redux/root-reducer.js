import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
// storage refers to the type of storage, typically localStorage, but other storage types (like session storage) can also be used.
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  wishlist: ["cart"],
  //this wishlist will be the strings array of individual reducers to manage with storage
};


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});


// persistReducer wraps rootReducer to create a persistedReducer, which now has the logic to save and retrieve data from storage.
export default persistReducer(persistConfig, rootReducer);
