import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  QueryDocumentSnapshot,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  Unsubscribe,
  updateDoc,
} from "firebase/firestore";

import { Article } from "../../app/features/articles/articles.slice";

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

export const db = getFirestore(app);

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

export const signOutUser = async () => {
  return signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

type AdditionalContent = {
  displayName?: string;
};

export type UserData = {
  displayName: string;
  createdAt: Date;
  email: string;
  userId: string;
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
      const userId = user.uid;
      const createdAt = new Date().toUTCString();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        userId,
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
  description: string,
  imageUrls: string[],
  userId: string
) => {
  try {
    const collectionRef = collection(db, `articles`);

    await addDoc(collectionRef, {
      articleName,
      category,
      price,
      description,
      imageUrls,
      userId,
      offers: [],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateArticle = async (articleToUpdate: Article) => {
  const articleRef = doc(db, `articles`, `${articleToUpdate.id}`);
  const {
    articleName,
    category,
    description,
    imageUrls,
    price,
    userId,
    offers,
  } = articleToUpdate;

  await updateDoc(articleRef, {
    articleName,
    category,
    description,
    imageUrls,
    price,
    userId,
    offers,
  });
};

export const getArticles = async () => {
  try {
    const q = query(collection(db, "articles"));

    const querySnapshot = await getDocs(q);
    const userArticles = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    return userArticles;
  } catch (error) {
    console.error(error);
  }
};

export const onArticles = async (
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>
): Promise<Unsubscribe> => {
  return new Promise((resolve, reject) => {
    const q = query(collection(db, "articles"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const arr: Article[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          arr.push(data as Article);
        });
        setArticles(arr);
        resolve(unsubscribe);
      },
      reject
    );
  });
};
