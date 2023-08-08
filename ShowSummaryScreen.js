// ShowSummaryScreen.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowSummary } from '../services/api';

const ShowSummaryScreen = () => {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState(null);

  useEffect(() => {
    fetchShowSummary(id)
      .then((data) => setShowSummary(data))
      .catch((error) => console.error('Error fetching show summary:', error));
  }, [id]);

  const handleBookTicket = () => {
    // Implement booking logic here (use local/session storage to store user details)
    console.log('Book ticket for:', showSummary.name);
  };

  return (
    <div className="show-summary-screen">
      {showSummary ? (
        <>
          <h1>{showSummary.name}</h1>
          <p>{showSummary.summary}</p>
          <button onClick={handleBookTicket}>Book Ticket</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSummaryScreen;
