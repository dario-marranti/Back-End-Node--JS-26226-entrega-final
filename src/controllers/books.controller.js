import{listBooks, getBook, createBook, updateBook, deleteBook} from '../services/books.service.js';
export const getAllBooks = async (req, res) => {
    try {
        const books = await listBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving books' });
    }
};