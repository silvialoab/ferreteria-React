import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, where, query, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYc8MEZC1dUHmwXhmMc3BEOM6NwJ0rBS8",
  authDomain: "my-ferre-proyect.firebaseapp.com",
  projectId: "my-ferre-proyect",
  storageBucket: "my-ferre-proyect.appspot.com",
  messagingSenderId: "858621295866",
  appId: "1:858621295866:web:f040d96be521a7b4d3dd43"
};


initializeApp(firebaseConfig);
const db = getFirestore();

export const misArticulos = () => {
  const query = getDocs(collection(db, 'Articulos'))  
  return query
}

export const articulosCat = (categoria) => {
  const preg = collection(db, 'Articulos')
  const preg2 = query(preg, where('categoria', '==', categoria))  
  const preg3 = getDocs(preg2)
  return preg3
}  

export const art = (id) => {
  const preg4 = doc(db, 'Articulos', id)
  const preg5 = getDoc(preg4)
  return preg5
}