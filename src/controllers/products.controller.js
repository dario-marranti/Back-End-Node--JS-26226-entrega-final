import { listProducts as listProductService,
  findProduct as findProductService,
  addProduct as addProductService,
  removeProduct as removeProductService } from "../services/products.service.js";

export const getProducts = async (req, res) => {
    try {
        const products = await listProductService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving products' });
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await findProductService(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Product' });
    }
};

export const createProduct = async (req, res) => {
    try {
    const { name, price, categoryId } = req.body ?? {}; 

        const newProduct = await addProductService({ name, price, categoryId });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, categoryId } = req.body ?? {}; 
    try {
        const updatedProduct = await updateProduct(id, { name, price, categoryId });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
    }
};

export const removeProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await removeProductService(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting Product' });
    }
};