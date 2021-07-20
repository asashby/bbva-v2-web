import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0y0q2u6MqFtSr-oRtmeLF1eUgOU8hV5A",
    authDomain: "homebankingdata-61fd0.firebaseapp.com",
    projectId: "homebankingdata-61fd0",
    storageBucket: "homebankingdata-61fd0.appspot.com",
    messagingSenderId: "960179971267",
    appId: "1:960179971267:web:5fa497558657bf7238ee76"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;