import React from 'react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Maintenance</h1>
      <div className="flex justify-center">
        <nav className="flex  gap-4">
          <Link
            to="/admin/maintenance/add-update-book"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center block"
          >
            Add/Update Book
          </Link>
          <Link
            to="/admin/maintenance/add-update-user"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center block"
          >
            Add/Update User
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Maintenance;
