import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// eslint-disable-next-line import/prefer-default-export
export const searchedMoviesApi = (query, page) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
