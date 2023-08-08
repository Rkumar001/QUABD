// ShowCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <Link to={`/show/${show.id}`}>
        <button>View Summary</button>
      </Link>
    </div>
  );
};

export default ShowCard;
