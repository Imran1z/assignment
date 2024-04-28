import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ReportOption title="Master List of Books" path="/reports/master-list-books" />
        <ReportOption title="Master List of Movies" path="/reports/master-list-movies" />
        <ReportOption title="Master List of Memberships" path="/reports/master-list-memberships" />
        <ReportOption title="Active Issues" path="/reports/active-issues" />
        <ReportOption title="Overdue Returns" path="/reports/overdue-returns" />
        <ReportOption title="Pending Issue Requests" path="/reports/pending-issue-requests" />
      </div>
    </div>
  );
};

const ReportOption = ({ title, path }) => {
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

export default Reports;
