import React, { useState, useEffect } from 'react';

const ActiveIssues = () => {
  const [activeIssues, setActiveIssues] = useState([]);

  useEffect(() => {
    const fetchActiveIssues = async () => {
      try {
        const response = await fetch('/api/v1/book/issued');
        if (!response.ok) {
          throw new Error('Failed to fetch active issues');
        }
        const data = await response.json();
        console.log(data)
        setActiveIssues(data);
      } catch (error) {
        console.error('Error fetching active issues:', error);
      }
    };

    fetchActiveIssues();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Active Issues</h1>
      <div>
        {activeIssues.length === 0 ? (
          <p className="text-center">No active issues</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {activeIssues.map((issue) => (
              <li key={issue._id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <span className="font-medium">{issue.name}</span>
                    <span className="text-gray-500">Issued to: {issue.issuedTo.username}</span>
                    <span className="text-gray-500">Issued From: {new Date(issue.issuedFrom).toLocaleDateString()}</span>
                    <span className="text-gray-500">Issued Return: {new Date(issue.issuedReturn).toLocaleDateString()}</span>
                  </div>
                </div>
                <div>
                  <img src={issue.image} alt={issue.name} className="ml-4" style={{ width: '100px', height: 'auto' }} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
  
};

export default ActiveIssues;
