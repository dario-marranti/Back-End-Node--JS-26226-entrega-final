import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const booksCollection = collection(db, "books");

export const getAllBooks = async () => {
  const snapshot = await getDocs(booksCollection);

  return snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
};

export const getBookById = async (id) => {
  const reference = doc(db, "books", id);
  const snapshot = await getDoc(reference);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};

export const createBook = async (data) => {
  const reference = await addDoc(booksCollection, data);

  return {
    ...data,
    id: reference.id,
  };
};

export const deleteBook = async (id) => {
  const reference = doc(db, "books", id);

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