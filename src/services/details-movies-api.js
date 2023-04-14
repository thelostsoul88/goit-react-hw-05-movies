import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '11546a486a09144867cb90a93b48d542',
};

const fetchDetailsMovie = async movieId => {
  const { data } = await axios.get(`3/movie/${movieId}?`);
  return data;
};

export default fetchDetailsMovie;
