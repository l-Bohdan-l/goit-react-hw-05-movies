import { fetchTrandingMovies } from '../../services/ApiSrvice';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import moviePlaceholder from '../../images/movie-placeholder.png';
import styles from './HomePage.module.scss';
import PropTypes from 'prop-types';

export function HomePage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(data => setMovieList(data.results));
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Trending movies</h2>
      <ul className={styles.list}>
        {movieList.map(movie => (
          <li key={movie.id} className={styles.item}>
            <NavLink to={`/movies/${movie.id}`}>
              <img
                className={styles.image}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : moviePlaceholder
                }
                alt={movie.original_title}
              />
              <p className={styles.imageTitle}>{movie.original_title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

HomePage.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
};
