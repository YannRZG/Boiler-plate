import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUz01BewySMkXZjJpq5oF0_P36ar-J5Bo",
  authDomain: "http://localhost:5173/boiler-plate-5012b.firebaseapp.com",
  projectId: "boiler-plate-5012b",
  storageBucket: "gs://boiler-plate-5012b.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
const signInWithTwitter = () => signInWithPopup(auth, twitterProvider);
const signInWithGithub = () => signInWithPopup(auth, githubProvider);

export { auth, signInWithGoogle, signInWithTwitter, signInWithGithub };
