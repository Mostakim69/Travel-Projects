import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvder = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvder);
  };
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    googleSignIn,
    githubSignIn,
    loading,
    user,
    signoutUser,
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);

      /* if (currentUser?.email) {
        axios
          .post(
            "http://localhost:5000/api/v1/auth/create-jwt",
            { email: currentUser.email },
            { withCredentials: true },
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      } */
    });

    return () => cleanUp();
  }, []);
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
