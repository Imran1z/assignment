import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Admin Home</h1>
      <div className="flex justify-center">
        <nav className="flex  gap-4">
          <Link
            to="/admin/maintenance"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center block"
          >
            Maintenance
          </Link>
          <Link
            to="/reports"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center block"
          >
            Reports
          </Link>
          <Link
            to="/transactions"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-center block"
          >
            Transactions
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminHome;
