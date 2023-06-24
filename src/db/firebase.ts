// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHspj0fa1mNgTQPbP9mQS-yihjnTwwEHg",
    authDomain: "farmerbrother-1685361048558.firebaseapp.com",
    projectId: "farmerbrother-1685361048558",
    storageBucket: "farmerbrother-1685361048558.appspot.com",
    messagingSenderId: "242978669744",
    appId: "1:242978669744:web:0fa71db829cd5722f16775",
    measurementId: "G-4WY08RRC47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export { firestoreDb, app }
// const analytics = getAnalytics(app);