import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { fetchMovieByName } from '../../services/ApiSrvice';
import moviePlaceholder from '../../images/movie-placeholder.png';
import styles from './MoviesPage.module.scss';

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const sortOrder = new URLSearchParams(location.search).get('query');

  const fetchMoviesSearch = searchQuery => {
    fetchMovieByName(searchQuery).then(data => setMovies(data.results));
  };

  const handleSubmit = e => {
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
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button className={styles.button} type="submit">
            🎞Search
          </button>

          <input
            className={styles.input}
            autoComplete="on"
            autoFocus
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
          />
        </form>
      </div>

      <ul className={styles.moviesList}>
        {movies.map(movie => (
          <li className={styles.moviesListItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className={styles.moviesImg}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : moviePlaceholder
                }
                alt={movie.original_title}
              />
              <p className={styles.moviesTitle}>{movie.original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

MoviesPage.prototypes = {
  searchQuery: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
};
