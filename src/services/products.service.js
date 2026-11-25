import { getAllProducts, getProductById, createProduct, deleteProduct } from "../models/products.model.js";

export const listProducts = async () => {
  return await getAllProducts();
};

export const findProduct = async (id) => {
  return await getProductById(id);
};

export const addProduct = async (data) => {
  return await createProduct(data);
};

export const removeProduct = async (id) => {
  return await deleteProduct(id);
};