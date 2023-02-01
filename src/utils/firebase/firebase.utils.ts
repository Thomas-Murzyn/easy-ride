import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpQzLSd5vfGMLBO0kmAlW96K4p2buZmk",
  authDomain: "easy-ride-8e52b.firebaseapp.com",
  projectId: "easy-ride-8e52b",
  storageBucket: "easy-ride-8e52b.appspot.com",
  messagingSenderId: "767638987247",
  appId: "1:767638987247:web:5f7020c8be69f4a6d7961a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

type AdditionalContent = {
  displayName: string;
};

export const createUserWithEmail = async (email: string, password: string) => {
  if (!email || !password) return;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
