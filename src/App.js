import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-signup/signIn-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  // Variable to store unsubscribe function from auth listener
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          onSnapshot(userRef, (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });

            console.log(this.state)
          });

        }
      } else {
        this.setState({ currentUser: null });
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
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
