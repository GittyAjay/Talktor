import React, { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../firebase';
import firebase from 'firebase';
console.log(auth);
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => { //actually this method return reference which we call to unsubcribe
            setCurrentUser(user);//setting Current user
        });
        return unsubscribe;
    }, [])

    function sign_out() {
        firebase.auth().signOut().then(() => {
            setCurrentUser(null);
        }).catch((error) => error);
    }

    const value = {
        currentUser,
        sign_out
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
