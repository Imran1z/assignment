import React, { useEffect, useState } from 'react';

const AddUpdateBook = () => {
  const [formData, setFormData] = useState({});
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/v1/book/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/v1/book/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to add book');
      }

      const data = await res.json();

      console.log('Book added:', data);
    } catch (error) {
      console.log('An error has occurred:', error.message);
    }
    closeModal();
  };

  const handleEdit = (bookId) => {
    // Handle edit functionality
    console.log(`Editing book with ID: ${bookId}`);
  };

  const handleDelete = async (bookId) => {
    // Handle delete functionality
    console.log(`Deleting book with ID: ${bookId}`);
    try {
      const res = await fetch(`/api/v1/book/delete/${bookId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete book');
      }

      // Update books state to reflect deletion
      setBooks(books.filter((book) => book._id !== bookId));
    } catch (error) {
      console.log('An error has occurred:', error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add/Update Book</h1>

      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center"
      >
        Add Book
      </button>

      {/* Modal for adding/updating books */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 max-w-xl rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add Book</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Input fields for book name, image, and reference no. */}
              <input
                type="text"
                placeholder="Book Name"
                className="border p-3 rounded-lg"
                id="name"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border p-3 rounded-lg"
                id="image"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Reference No."
                className="border p-3 rounded-lg"
                id="reference_no"
                onChange={handleChange}
              />

              {/* Submit button */}
              <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                Add Book
              </button>
            </form>
          </div>
        </div>
      )}

      {/* List of books */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Book List</h2>
        {/* Display each book */}
        {books.map((book) => (
          <div key={book._id} className="border rounded-lg p-4 mb-4">
            <h3 className="font-semibold">Book Name: {book.name}</h3>
            <p>Reference No.: {book.reference_no}</p>
            {/* Image */}
            <img src={book.image} alt={book.name} className="mt-2" style={{ maxWidth: '200px' }} />

            {/* Edit and Delete buttons */}
            <div className="flex mt-4">
              <button
                onClick={() => handleEdit(book._id)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUpdateBook;
