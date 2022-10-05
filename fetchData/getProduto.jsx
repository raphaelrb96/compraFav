import { getApp } from "firebase/app";
import { collection, doc, getFirestore } from "firebase/firestore";

export const getProduto = async (codigo) => {
    const db = getFirestore(getApp());
    const feedCollection = collection(db, 'produtos')
    const feddDoc = await doc(feedCollection, codigo).get();
  
    if (!feddDoc.exists) {
      return null
    }
  
    return feddDoc.data();
  };