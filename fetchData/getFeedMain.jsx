import { getApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { createFirebaseApp } from "../firebase/clientApp";

export const getFeedMain = async () => {
    const db = getFirestore(createFirebaseApp());
    const feedCollection = collection(db, 'Feed')
    const feedDoc = doc(feedCollection, 'Main');
    const feed = await getDoc(feedDoc);
  
    if (!feed.exists) {
      return null
    }
  
    return feed.data();
  };