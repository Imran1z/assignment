// import mongoose from 'mongoose';

// const bookSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     reference_no: {
//       type: String,
//       required: true,
//       unique: true,
//     }
//   },
//   { timestamps: true }
// );

// const Book = mongoose.model('Book', bookSchema);

// export default Book;
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
    },
    isIssued: {
      type: Boolean,
      default: false, // Initially, the book is not issued
    },
    issuedTo: {
      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      ref: 'User', // Referring to the User model
      default: null, // Initially, the book is not issued to anyone
    },
    issuedFrom: {
      type: Date,
      default: null, // Initially, the book is not issued
    },
    issuedReturn: {
      type: Date,
      default: null, // Initially, the book is not issued
    }
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;

