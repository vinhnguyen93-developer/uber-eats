import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  limit,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQ-bFqCdAhsiV4sMZT6J8RBnEv8by8Bds',
  authDomain: 'rn-uber-eat-a3c9c.firebaseapp.com',
  projectId: 'rn-uber-eat-a3c9c',
  storageBucket: 'rn-uber-eat-a3c9c.appspot.com',
  messagingSenderId: '826438827551',
  appId: '1:826438827551:web:5782cb90c81bd2584e9f2a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  limit,
  query,
};
