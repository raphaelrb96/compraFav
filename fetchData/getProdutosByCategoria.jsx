import { getApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clientApp";

export const getProdutosByCategoria = async (id) => {

    const db = getFirestore(createFirebaseApp());
    const feedCollection = collection(db, 'produtos')

    const q = query(feedCollection, where("categorias." + id, "==", true));

    const querySnapshot = await getDocs(q);
  
    if (querySnapshot.empty) {
      return null
    }

    let list = [];

    querySnapshot.forEach(docSnap => {
        list.push(docSnap.data());
    });
  
    return list;
  };