import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    //console.log(userDocRef);
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handelEvent = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password Incorrect, Please enter a valid password");
          resetForm();
          break;
        case "auth/user-not-found":
          alert("User Invalid, Please check your Email Id");
          resetForm();
          break;
        case "auth/popup-closed-by-user":
          alert("popUp closed....  Please SignIn again");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have account?</h2>
      <span>Sign In with Email and Password </span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handelEvent}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handelEvent}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
