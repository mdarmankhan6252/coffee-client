import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const auth = getAuth(app)
   const googleProvider = new GoogleAuthProvider()

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const loginUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }
   const logOut = () => {
      return signOut(auth)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         console.log('current User -->', currentUser);
         setLoading(false)
      })
      return () => {
         return unsubscribe()
      }
   }, [auth])

   const authInfo = {
      user,
      createUser,
      loginUser,
      googleLogin,
      loading,
      logOut
   }


   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;