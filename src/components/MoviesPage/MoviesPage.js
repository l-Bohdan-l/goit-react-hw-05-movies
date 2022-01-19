import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { fetchMovieByName } from '../../services/ApiSrvice';

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const sortOrder = new URLSearchParams(location.search).get('query');

  const fetchMoviesSearch = searchQuery => {
    fetchMovieByName(searchQuery).then(data => setMovies(data.results));
  };
  console.log(searchQuery);
  console.log(movies);

  const handleSubmit = e => {
    console.log('111111111111111', location.pathname + location.search);
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Empty input value');
      return;
    }
    setMovies([]);
    fetchMoviesSearch(searchQuery);
    navigate({ ...location, search: `query=${searchQuery}` });
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (sortOrder) {
      fetchMoviesSearch(sortOrder);
    }
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button type="submit">🎞Search</button>

        <input
          autoComplete="on"
          autoFocus
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
          type="text"
          placeholder="Search images and photos"
        />
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              // state={{
              //   from: location,
              // }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <p>{movie.original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
