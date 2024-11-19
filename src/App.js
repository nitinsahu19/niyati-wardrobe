import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-signup/signIn-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  // Variable to store unsubscribe function from auth listener
  unsubscribeFromAuth = null;

  // componentDidMount sets up an onAuthStateChanged listener, which triggers each time the auth state changes.
  componentDidMount() {
    // setCurrentUser is an action dispatcher provided by mapDispatchToProps. It sends the currentUser data to Redux whenever there’s an update, storing it in the global state.
    // In React, when you use connect to connect your component to the Redux store, it injects certain props into your component. In your case, mapDispatchToProps injects the setCurrentUser function into App as a prop.
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // If userAuth is not null (user is signed in), it creates or fetches a user profile document using createUserProfileDocument.
        // createUserProfileDocument returns a reference (userRef) to the user document in Firestore.
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          // onSnapshot is used to get real-time updates of the user document from Firestore.
          onSnapshot(userRef, (snapShot) => {
            // setCurrentUser action is dispatched with the user’s data, updating the Redux store with the current user info.
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    // Unsubscribe from the listener to prevent memory leaks
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// mapDispatchToProps binds the setCurrentUser action to props, allowing the component to update the currentUser state in the Redux store.
// dispatch is a function provided by Redux that allows you to send actions to the Redux store.
// dispatch(setCurrentUser(user)) will call the setCurrentUser action creator, which returns an action object (typically with a type and payload) that Redux then uses to update the state.
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
