import axios from 'axios';

export const getMovieList = async () => {
  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=a0347d86d0129dde6c2bdf2a4a73230d`);
    // console.log({ movieList: response.data.results });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const SearchMovie = async (q) => {
  const Search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=a0347d86d0129dde6c2bdf2a4a73230d`
  );
  //   console.log(q);
  return Search.data;
};
