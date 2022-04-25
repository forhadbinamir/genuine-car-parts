// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUlkVtLuhICWre9ceuWnydX2GAM7wQBlE",
    authDomain: "genuine-car-parts.firebaseapp.com",
    projectId: "genuine-car-parts",
    storageBucket: "genuine-car-parts.appspot.com",
    messagingSenderId: "456525885971",
    appId: "1:456525885971:web:4f4d174b9896089ad705e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;