import { listBooks as listBooksService,
  findBook as findBookService,
  addBook as addBookService,
  removeBook as removeBookService } from "../services/books.service.js";

export const getBooks = async (req, res) => {
    try {
        const books = await listBooksService();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving books' });
    }
};

export const getBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await findBookService(id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving book' });
    }
};

export const createBook = async (req, res) => {
    try {
    const { title, author, publishedDate } = req.body ?? {}; 

        const newBook = await addBookService({ title, author, publishedDate });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Error creating book' });
    }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, publishedDate } = req.body ?? {}; 
    try {
        const updatedBook = await updateBook(id, { title, author, publishedDate });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Error updating book' });
    }
};

export const removeBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await removeBookService(id);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting book' });
    }
};