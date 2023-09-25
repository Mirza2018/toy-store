// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf7WWHQuQjW20VCmG8wtRr4NPb1u6c0CE",
    authDomain: "toys-store-4b5df.firebaseapp.com",
    projectId: "toys-store-4b5df",
    storageBucket: "toys-store-4b5df.appspot.com",
    messagingSenderId: "109521536548",
    appId: "1:109521536548:web:a9a0ee20d948acf7df7ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;