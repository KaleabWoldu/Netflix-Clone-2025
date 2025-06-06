
const API_KEY = process.env.REACT_APP_API_KEY; ;
// const API_KEY = import.meta.env.VITE_api_key;


const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  // fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
