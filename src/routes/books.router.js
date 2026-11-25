import { Router } from "express";
import { getBooks, getBook, createBook, removeBookById } from "../controllers/books.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", authenticate, createBook);

router.delete("/:id", authenticate, removeBookById);

export default router;