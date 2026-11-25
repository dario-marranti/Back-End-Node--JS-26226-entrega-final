import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
};

export const getProductById = async (id) => {
  const reference = doc(db, "products", id);
  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};

export const createProduct = async (data) => {
  const reference = await addDoc(productsCollection, data);

  return {
    ...data,
    id: reference.id,
  };
};

export const deleteProduct = async (id) => {
  const reference = doc(db, "products", id);

  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
    return null;
  }

  await deleteDoc(reference);

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};