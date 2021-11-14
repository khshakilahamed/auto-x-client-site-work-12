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
                saveUser(name, email);
                setError('');
            })
            .catch(error => {
                setError(error.message);
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
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                saveGoogleUser(user.displayName, user.email);
                setError('');
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
    }, []);


    const saveUser = (displayName, email) => {
        const user = { displayName, email };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }

    const saveGoogleUser = (displayName, email) => {
        const user = { displayName, email };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


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