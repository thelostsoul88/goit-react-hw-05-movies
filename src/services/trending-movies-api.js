import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '11546a486a09144867cb90a93b48d542',
};

const fetchTrendingMovie = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day'
  );
  return data;
};

export default fetchTrendingMovie;
