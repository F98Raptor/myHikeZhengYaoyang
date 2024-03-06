//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCe-JkcTubKRnFSZs0ACuey_KQJ6Fqo63g",
    authDomain: "demo07-f3f8a.firebaseapp.com",
    projectId: "demo07-f3f8a",
    storageBucket: "demo07-f3f8a.appspot.com",
    messagingSenderId: "941337801209",
    appId: "1:941337801209:web:a895ea1fa9c19e9fd04d28",
    // measurementId: "G-0DWTL046JN"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
