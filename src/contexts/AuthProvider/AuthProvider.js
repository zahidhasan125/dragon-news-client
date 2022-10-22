import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        signOut(auth)
    }

//observer for login change events

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        // unmount when not using side effect
        return () => {
            unsubscribe()
        };
    },[])
    
    const authValue = {user, providerLogin, logOut}
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;