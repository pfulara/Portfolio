import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCm4LzA0KxBc1Bh-BOYt-AFQsPH7nExunk",
    authDomain: "portfolio-44cf3.firebaseapp.com",
    databaseURL: "https://portfolio-44cf3.firebaseio.com",
    projectId: "portfolio-44cf3",
    storageBucket: "portfolio-44cf3.appspot.com",
    messagingSenderId: "180957930327",
    appId: "1:180957930327:web:68a9dd9e0e75069ee71412"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;