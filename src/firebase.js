import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAAS30DsbRDH9ttuojN0d-jr13pJXjUlt8",
  authDomain: "challenge-8f15d.firebaseapp.com",
  databaseURL: "https://challenge-8f15d.firebaseio.com",
  projectId: "challenge-8f15d",
  storageBucket: "challenge-8f15d.appspot.com",
  messagingSenderId: "316885994068",
  appId: "1:316885994068:web:8d6283bae18403823ebbc1",
  measurementId: "G-V5RGP54SCH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
