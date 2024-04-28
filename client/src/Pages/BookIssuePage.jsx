// IsBookAvailable.js
import React, { useState } from 'react';

const IsBookAvailable = () => {
  const [bookName, setBookName] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  const handleChange = (e) => {
    setBookName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/v1/book/search/${bookName}`);
      const data = await res.json();
      if (res.ok) {
        setAvailabilityMessage(data.message);
      } else {
        setAvailabilityMessage('Book not found');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setAvailabilityMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Is Book Available?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Book Name"
          className="border p-3 rounded-lg"
          value={bookName}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          Check Availability
        </button>
      </form>
      {availabilityMessage && <p className="mt-4 text-center">{availabilityMessage}</p>}
    </div>
  );
};

export default IsBookAvailable;
