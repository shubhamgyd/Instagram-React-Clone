import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSdzH6UfZN3PttFOgOhqslvW83rE3iFNg",
  authDomain: "insta-clone-yt-b0604.firebaseapp.com",
  projectId: "insta-clone-yt-b0604",
  storageBucket: "insta-clone-yt-b0604.appspot.com",
  messagingSenderId: "1003808727170",
  appId: "1:1003808727170:web:cd0565bf9e86575f74149b",
  measurementId: "G-YHT92BW017",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
