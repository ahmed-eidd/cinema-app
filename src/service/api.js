import axios from 'axios';

const backendUrl = 'https://api.themoviedb.org/3/movie/';

axios.defaults.baseURL = backendUrl;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
