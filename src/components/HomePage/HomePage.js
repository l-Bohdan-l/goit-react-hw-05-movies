import { fetchTrandingMovies } from '../../services/ApiSrvice';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

export function HomePage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(data => setMovieList(data.results));
  }, []);
  console.log('movie', movieList);

  return (
    <>
      <h2>Trending movies</h2>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
