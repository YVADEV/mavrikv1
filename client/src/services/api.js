const API_URL = 'http://localhost:4000/api/v1';

export const fetchLeads = async () => {
  try {
    console.log('Fetching leads...');
    const response = await fetch(`${API_URL}/facebook-leads`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched leads:', data);
    return data;
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw error;
  }
};
