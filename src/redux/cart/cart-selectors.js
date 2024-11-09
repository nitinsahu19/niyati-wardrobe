import { createSelector } from "reselect";

// Input selector: accesses cart directly from the Redux state
const selectCart = (state) => state.cart;

// Memoized selector: calculates the total item  only if cart changes
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

// Memoized selector: calculates the total item count only if cartItems changes
export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);
