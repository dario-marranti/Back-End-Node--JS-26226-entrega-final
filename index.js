import express from "express";
import cors from "cors";

import booksRouter from "./src/routes/books.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();

app.use(express.json()); 
app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("API del curso funcionando");
});

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});