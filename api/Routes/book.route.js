import express from 'express';
import Book from '../Models/book.model.js';
import User from '../Models/user.model.js'

const router = express.Router();

// Create a book
router.post('/create', async (req, res) => {
    console.log(req.body)
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


router.get('/search/:name', async (req, res) => {
  try {
    console.log(req.params.name)
    const bookName = req.params.name;
    const foundBook = await Book.findOne({ name: bookName });

    if (!foundBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (foundBook.isIssued) {
      return res.json({ message: 'Book is currently issued', book: foundBook });
    } else {
      return res.json({ message: 'Book is available', book: foundBook });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


router.post('/issue', async (req, res) => {
  try {
    const { name, issuedFrom, issuedReturn, issuedTo } = req.body;
    console.log(name, issuedFrom, issuedReturn, issuedTo )

    // Find the book by name
    const foundBook = await Book.findOne({ name });
    //console.log(foundBook)

    if (!foundBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the book is already issued
    if (foundBook.isIssued) {
      return res.status(400).json({ message: 'Book is already issued' });
    }

    // Find the user by ID
    const user = await User.findById(issuedTo);
    console.log(user)

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update book details
    foundBook.isIssued = true;
    foundBook.issuedFrom = issuedFrom;
    foundBook.issuedReturn = issuedReturn;
    foundBook.issuedTo = issuedTo;

    // Save the updated book details
    await foundBook.save();

    res.json({ message: 'Book issued successfully', book: foundBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
