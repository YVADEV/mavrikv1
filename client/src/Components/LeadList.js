import React, { useState, useEffect } from 'react';
import { fetchLeads } from '../services/api';

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeads = async () => {
      try {
        const data = await fetchLeads();
        console.log('Received leads:', data);
        setLeads(data);
      } catch (error) {
        console.error('Failed to fetch leads:', error);
        setError(error.message);
      }
    };

    getLeads();
    const interval = setInterval(getLeads, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Facebook Leads</h2>
      {leads.length === 0 ? (
        <p>No leads found. If you just added a lead, it may take a moment to appear.</p>
      ) : (
        <ul>
          {leads.map(lead => (
            <li key={lead._id}>
              {lead.name} - {lead.email} - {lead.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeadList;
