// IssueBook.js
import React, { useState } from 'react';

const IssueBook = () => {
  const [bookName, setBookName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'bookName') {
      setBookName(value);
    } else if (name === 'issueDate') {
      // Check if the selected issue date is earlier than today
      const selectedDate = new Date(value);
      const today = new Date();
      if (selectedDate < today) {
        // If the selected date is earlier than today, set it to today
        setIssueDate(today.toISOString().substr(0, 10));
      } else {
        setIssueDate(value);
      }
    } else if (name === 'returnDate') {
      setReturnDate(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(bookName,issueDate,returnDate)
      // Retrieve user data from local storage
      const userDataString = localStorage.getItem('userData');
  
    //   console.log(userDataString)
      // Check if userDataString exists
      if (!userDataString) {
        setMessage('User data not found. Please login.');
        return;
      }
  
      // Parse user data string to object
      const userData = JSON.parse(userDataString);
    //   console.log(userData)
  
      // Extract _id from userData
      const issuedToId = userData._id;
    //   console.log(issuedToId)
       console.log(bookName,issueDate,returnDate,issuedToId)

  
      const res = await fetch('/api/v1/book/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: bookName, issuedFrom: issueDate, issuedReturn: returnDate, issuedTo: issuedToId }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage('Failed to issue book');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage('An error occurred. Please try again.');
    }
  };
  
  

  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Issue Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="bookName"
          placeholder="Enter Book Name"
          className="border p-3 rounded-lg"
          value={bookName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="issueDate"
          className="border p-3 rounded-lg"
          value={issueDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="returnDate"
          className="border p-3 rounded-lg"
          value={returnDate}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          Issue Book
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default IssueBook;
