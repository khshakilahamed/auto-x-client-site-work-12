import initializeFirebase from "../pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();


    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                addUserName(name);
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    const addUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => { })
            .catch(error => {
                setError(error);
            })
    };


    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error);
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
    })


    return {
        user,
        error,
        registerUser,
        loginUser,
    };
};

export default useFirebase;