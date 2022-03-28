import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1ntS7k_IHRx8PHl-l-vi9yE7DOmYODZE",
    authDomain: "linkedin-clone-web-5ed38.firebaseapp.com",
    projectId: "linkedin-clone-web-5ed38",
    storageBucket: "linkedin-clone-web-5ed38.appspot.com",
    messagingSenderId: "173185267810",
    appId: "1:173185267810:web:15fb6fbf39618dbf56f93b",
    measurementId: "G-W4VECZNNM7"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };