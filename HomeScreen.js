// HomeScreen.js

import React, { useEffect, useState } from 'react';
import { fetchShows } from '../services/api';
import ShowCard from '../components/ShowCard';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows()
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="home-screen">
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
