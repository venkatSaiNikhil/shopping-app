import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.compoment.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.compoment.jsx";

import "./authentication.styles.scss";

const Authentication = () => {
  useEffect(() => {
    const unsubscribe = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        //const userDocRef = await createUserDocumentFromAuth(response.user);
        await createUserDocumentFromAuth(response.user);
      }
    };
    return () => unsubscribe();
  }, []);

  return (
    <div className="authention-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
