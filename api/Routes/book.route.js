import express from 'express';
import Book from '../Models/book.model.js';

const router = express.Router();

// Create a book
router.post('/create', async (req, res) => {
  try {
    const { name, image, reference_no } = req.body;
    const book = new Book({ name, image, reference_no });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all books
router.get('/get', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book
router.delete('/get/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
