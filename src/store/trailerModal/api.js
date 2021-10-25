import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const trailerApi = (movieId) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
