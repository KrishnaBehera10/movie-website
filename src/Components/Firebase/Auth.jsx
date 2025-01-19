import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEPKoTsFX-FuXzvMB6PouQeY0fqeZoj54",
  authDomain: "movie-application-d9cf5.firebaseapp.com",
  projectId: "movie-application-d9cf5",
  storageBucket: "movie-application-d9cf5.firebasestorage.app",
  messagingSenderId: "153451970614",
  appId: "1:153451970614:web:847fc6acfae98fc3165897",
  measurementId: "G-JRLWCJ3WZ9",
};
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const firestore = getFirestore(app);
//signup
async function Emailpasswordsignup(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(Auth, email, password);
    await addDoc(collection(firestore, "User"), {
      userId: user.user.uid,
      email: email,
      password: password,
    });
  } catch (error) {
    toast.error(error.code);
  }
}
//signin
async function Emailpasswordsignin(email, password) {
  try {
    await signInWithEmailAndPassword(Auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
}
//logout
async function signout() {
  signOut(Auth);
}

export { Emailpasswordsignin, Emailpasswordsignup, signout, Auth };
