import { initializeApp } from "firebase/app";
import {doc, getFirestore } from "../firebase/firestore"
import { collection, getDocs, where, query, getDoc } from "../firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnTtUmjorIi2-Sz1en1JusKdj54L8AtNw",
  authDomain: "lopez-ferreteria.firebaseapp.com",
  projectId: "lopez-ferreteria",
  storageBucket: "lopez-ferreteria.appspot.com",
  messagingSenderId: "237693957250",
  appId: "1:237693957250:web:b056ca490021d62048f09b",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const misArticulos = () => {
    const query = getDocs(collection(db, 'Articulos'))
    return query 
}