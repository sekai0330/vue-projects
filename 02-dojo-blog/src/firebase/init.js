import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
