import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQFUJLGgsxRtNL2qMG58A2a49cYwTj6DY",
  authDomain: "first-buy.firebaseapp.com",
  projectId: "first-buy",
  storageBucket: "first-buy.appspot.com",
  messagingSenderId: "239442617279",
  appId: "1:239442617279:web:26d2f5ae0feac155ef770a",
};

const app = initializeApp(firebaseConfig);
// export const db = firebase.firestore();
export const auth = getAuth(app);
