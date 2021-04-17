
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser
        })
        .catch(error => {
            const errorInfo = {};
            errorInfo.error = error.message;
            errorInfo.success = false;
            return errorInfo;
        })
}

export const handleFbSingIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser
        })
        .catch(error => {
            const errorInfo = {};
            errorInfo.error = error.message;
            errorInfo.success = false;
            return errorInfo;
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(result => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: ''
            }
            console.log(result);
            return signOutUser
        })
        .catch(error => {
            console.log(error);
            const errorInfo = {};
            errorInfo.error = error.message;
            errorInfo.success = false;
            return errorInfo;
        })
}



export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            updateUserName(name);
            return signedInUser;

        })
        .catch(error => {
            const errorInfo = {};
            errorInfo.error = error.message;
            errorInfo.success = false;
            return errorInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser;
        })
        .catch(error => {
            const errorInfo = {};
            errorInfo.error = error.message;
            errorInfo.success = false;
            return errorInfo;
        });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    })
    return name;
}