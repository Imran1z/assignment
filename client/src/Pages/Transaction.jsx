// Transactions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionOption = ({ title, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="border rounded-lg p-4 flex items-center justify-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

const Transactions = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Transactions</h1>
      <div className="grid grid-cols-2 gap-4">
        <TransactionOption title="Is Book Available?" path="/transactions/is-book-available" />
        <TransactionOption title="Issue Book" path="/transactions/issue-book" />
        <TransactionOption title="Return Book" path="/transactions/return-book" />
        <TransactionOption title="Pay Fine" path="/transactions/pay-fine" />
      </div>
    </div>
  );
};

export default Transactions;
