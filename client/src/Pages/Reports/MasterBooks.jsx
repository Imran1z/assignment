// MasterListOfBooks.js
import React, { useEffect, useState } from 'react';

const MasterListOfBooks = () => {
  const [books, setBooks] = useState([]);
  console.log(books)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/v1/book/get');
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Master List of Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book._id} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={book.image} alt={book.name} className="w-24 h-24 mb-2 rounded-lg" />
            <h3 className="font-semibold text-center">{book.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterListOfBooks;
