import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// persistStore is responsible for creating a persistor that saves the store's state to storage.
const persistor = persistStore(store);

export { store, persistor };

/* Redux-persist: How It Works Behind the Scenes
- Serialization: redux-persist serializes the state of the reducers listed in the whitelist or blacklist to a JSON format and saves it in storage.
- Rehydration: When the app reloads, redux-persist reads the saved state from storage and rehydrates it back into the Redux store.
- Data Persistence: With each update to the Redux store, redux-persist will automatically update the saved state in local storage. This allows data to persist even across sessions.*/
