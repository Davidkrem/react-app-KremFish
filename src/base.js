import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5B24Zd5s5nIbXsyZidPJxqBsL-IsTD-8",
  authDomain: "krem-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://krem-catch-of-the-day-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
