import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7WJF8SjZxSurMrf4XJo4smBcgzLLY6wI",
  authDomain: "miniblog-8f114.firebaseapp.com",
  projectId: "miniblog-8f114",
  storageBucket: "miniblog-8f114.appspot.com",
  messagingSenderId: "374413084990",
  appId: "1:374413084990:web:73418ee74b696247b0846f",
  measurementId: "G-VKT20QCJZL"
};
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

const db = getFirestore(app);

export { db, auth };
//export { analytics };