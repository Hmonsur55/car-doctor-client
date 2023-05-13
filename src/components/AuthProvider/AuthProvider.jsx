
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";


export const authContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

     const logOut = () => {
       return signOut(auth);
    };
    

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          return unsubscribe();
        };
      }, []);
    
    const authInfo = {
    user,
    loading,
      createUser,
      signIn,
      logOut,
    };



    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;