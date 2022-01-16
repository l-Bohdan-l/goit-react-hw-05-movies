import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/ApiSrvice';
import {
  useParams,
  NavLink,
  useLocation,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export function MoviePage() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log('location', useLocation());
  useEffect(() => {
    fetchMovie(id).then(setMovieData);
  }, [id]);

  console.log('data', movieData);

  return (
    <section>
      {movieData && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.original_title}
          />
          <div>
            <h2>{movieData.original_title}</h2>
            <p>User Score: {movieData.vote_average}</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movieData.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </section>
  );
}

// /movies/:movieId/cast
