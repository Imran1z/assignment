import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['user', 'admin'], // Restrict type to 'user' or 'admin'
      default: 'user', // Default value is 'user'
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
