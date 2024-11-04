import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // Handle form submission, prevents page reload
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(email, password);

      // Clear email and password fields upon submission
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  // Update the state with the input values dynamically
  handleChange = (event) => {
    const { value, name } = event.target; 
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        {/* Form element for email and password sign-in */}
        <form onSubmit={this.handleSubmit}>
          {/* Email input field */}
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          {/* Password input field */}
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            {/* Custom button for email and password sign-in */}
            <CustomButton type="submit">Sign In</CustomButton>

            {/* Custom button for Google sign-in */}
            <CustomButton
              type="button" // Set type as 'button' to prevent form submission
              onClick={(event) => {
                event.preventDefault(); // Prevent any default behavior
                signInWithGoogle(); // Trigger Google sign-in popup
              }}
              isGoogleSignIn // Custom prop to style the button specifically for Google sign-in
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
