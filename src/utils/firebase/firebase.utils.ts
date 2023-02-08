import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  QueryDocumentSnapshot,
  addDoc,
  collection,
} from "firebase/firestore";

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

const db = getFirestore(app);

const auth = getAuth(app);

export const createUserWithEmail = async (email: string, password: string) => {
  if (!email || !password) return;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  if (!email || !password) return;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};

type AdditionalContent = {
  displayName?: string;
};

export type UserData = {
  displayName: string;
  createdAt: Date;
  email: string;
};

export const createUserDocumentFromAuth = async (
  user: User,
  additionalContent: AdditionalContent
): Promise<undefined | QueryDocumentSnapshot<UserData>> => {
  // Get la réf de notre user dans la collection users de la db en le trouvant grâce à son uid
  const userDocRef = await doc(db, "users", user.uid);
  // Get un snapshot de ce user dans notre base de donnée en faisant getDoc avec la réf que l'on a récupéré
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = user;
      const createdAt = new Date().toUTCString();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalContent,
      });

      const refreshedUserSnapshot = await getDoc(userDocRef);
      return refreshedUserSnapshot as QueryDocumentSnapshot<UserData>;
    } catch (error) {
      console.error(error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const getCurrentUser = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const addItemToSell = async (
  articleName: string,
  category: string,
  price: string,
  description: string
) => {
  try {
    const collectionRef = collection(db, "articles");
    const docRef = doc(collectionRef, category);

    await setDoc(docRef, {
      articleName,
      category,
      price,
      description,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
