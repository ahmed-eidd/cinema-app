import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// eslint-disable-next-line import/prefer-default-export
export const upcomingMoviesApi = () => axios.get(`/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
