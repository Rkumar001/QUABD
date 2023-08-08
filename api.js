// api.js

import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
  const response = await axios.get(`${BASE_URL}/search/shows?q=all`);
  return response.data;
};

export const fetchShowSummary = async (showId) => {
  const response = await axios.get(`${BASE_URL}/shows/${showId}`);
  console.log(response);
  return response.data;
};
