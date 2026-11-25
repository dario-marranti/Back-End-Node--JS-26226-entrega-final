import { getAllBooks, getBookById, createBook, deleteBook } from "../models/books.model.js";

export const listBooks = async () => {
  return await getAllBooks();
};

export const findBook = async (id) => {
  return await getBookById(id);
};

export const addBook = async (data) => {
  return await createBook(data);
};

export const removeBook = async (id) => {
  return await deleteBook(id);
};