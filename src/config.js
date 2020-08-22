import firebase from "firebase";
const DBconfig = {
  apiKey: "AIzaSyA4HzcIt8fl82psridjSkKfVkQji_uencA",
  authDomain: "researchpaper2020.firebaseapp.com",
  databaseURL: "https://researchpaper2020.firebaseio.com",
  projectId: "researchpaper2020",
  storageBucket: "researchpaper2020.appspot.com",
  messagingSenderId: "1098646846876",
  appId: "1:1098646846876:web:d86d384d5428b148ed5c59",
  measurementId: "G-FR3VV0E41B",
};

firebase.initializeApp(DBconfig);
export default firebase;
