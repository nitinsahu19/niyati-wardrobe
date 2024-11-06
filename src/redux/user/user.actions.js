import { UsetActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UsetActionTypes.SET_CURRENT_USER,
  payload: user,
});
