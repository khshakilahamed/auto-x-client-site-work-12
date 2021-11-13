import initializeFirebase from "../pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()


    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                addUserName(name);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }

    const addUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => { })
            .catch(error => {
                setError(error.message);
            })
    };


    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])


    return {
        user,
        error,
        registerUser,
        loginUser,
        loginWithGoogle,
        handleLogout,
    };
};

export default useFirebase;