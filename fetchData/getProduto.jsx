import { getApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clientApp";

export const getProduto = async (codigo) => {

    const db = getFirestore(createFirebaseApp());

    const feedCollection = collection(db, 'produtos');

    const refFeedDoc = doc(feedCollection, codigo);

    const feddDoc = await getDoc(refFeedDoc);
  
    if (!feddDoc.exists) {
      return null
    }
  
    return feddDoc.data();
  };