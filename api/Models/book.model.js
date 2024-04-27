import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    reference_no: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
