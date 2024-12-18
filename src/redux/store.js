import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

// To remove the redux-logger middleware in the production build, you can conditionally include it based on the environment. Here's how you can modify your code:
// getDefaultMiddleware() is useful if you want to add some custom middleware, but also still want to have the default middleware added as well:
const middleware = (getDefaultMiddleware) => {
  const middlewares = getDefaultMiddleware({ serializableCheck: false }).concat(
    thunk
  ); // Add thunk middleware

  // Conditionally include logger only in non-production environments
  if (process.env.NODE_ENV !== "production") {
    return middlewares.concat(logger);
  }

  return middlewares;
};

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// persistStore is responsible for creating a persistor that saves the store's state to storage.
const persistor = persistStore(store);

export { store, persistor };

/* Redux-persist: How It Works Behind the Scenes
- Serialization: redux-persist serializes the state of the reducers listed in the whitelist or blacklist to a JSON format and saves it in storage.
- Rehydration: When the app reloads, redux-persist reads the saved state from storage and rehydrates it back into the Redux store.
- Data Persistence: With each update to the Redux store, redux-persist will automatically update the saved state in local storage. This allows data to persist even across sessions.*/
