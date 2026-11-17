import{Router} from 'express';
import{getAllBooks, getBook, createBook, updateBook, deleteBook} from '../controllers/books.controller.js';

const router = Router();    
export default router;