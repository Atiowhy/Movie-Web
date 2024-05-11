import { useEffect, useState } from 'react';
import { getMovieList, SearchMovie } from './Api';
import './App.css';

const App = () => {
  // const [count, setCount] = useState(0);

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="Movie-image"
          />
          <div className="Movie-date">Release : {movie.release_date}</div>
          <div className="Movie-rate">Rate : {movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    // console.log(q);

    const query = await SearchMovie(q);
    setPopularMovies(query.results);
    console.log({ query: query });
  };
  return (
    <>
      <div>
        <h1>Atio Movie</h1>
        <input
          type="text"
          placeholder="Cari film kesayangan"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </div>
    </>
  );
};

export default App;
