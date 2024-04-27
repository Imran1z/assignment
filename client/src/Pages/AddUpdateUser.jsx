import React, { useEffect, useState } from 'react';

const AddUpdateUser = () => {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/v1/auth/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
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
      const res = await fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await res.json();

      // Store data in local storage
      localStorage.setItem('userData', JSON.stringify(data));

      console.log('Data stored in local storage:', data);

      // You can redirect to another page or perform other actions after storing the data
    } catch (error) {
      console.log('An error has occurred:', error.message);
    }
    closeModal();
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add/Update User</h1>

      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center"
      >
        Add User
      </button>

      {/* Modal for adding/updating users */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 max-w-xl rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add User</h2>
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
              {/* Input fields for username, email, password */}
              {/* Replace the input fields with your actual input fields */}
              <input
                type="text"
                placeholder="username"
                className="border p-3 rounded-lg"
                id="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="email"
                className="border p-3 rounded-lg"
                id="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                className="border p-3 rounded-lg"
                id="password"
                onChange={handleChange}
              />

              {/* Submit button */}
              <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                Add User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* List of users */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        {/* Display each user */}
        {users.map((user) => (
          <div key={user._id} className="border rounded-lg p-4 mb-4">
            <h3 className="font-semibold">Username: {user.username}</h3>
            <p>Email: {user.email}</p>
            {/* Buttons for edit and delete */}
            <div className="flex mt-2">
              <button className="bg-blue-500 text-white py-1 px-2 rounded-lg mr-2">Edit</button>
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUpdateUser;
