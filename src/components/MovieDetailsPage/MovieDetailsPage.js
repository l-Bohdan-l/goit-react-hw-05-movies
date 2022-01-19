import React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';
import { fetchMovie } from '../../services/ApiSrvice';
import {
  useParams,
  NavLink,
  useLocation,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import moviePlaceholder from '../../images/movie-placeholder.png';

export function MoviePage() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', useLocation());
  useEffect(() => {
    fetchMovie(id).then(setMovieData);
  }, [id]);

  console.log('data', movieData);

  const goBack = () => {
    navigate(-1);
  };

  console.log(pathname.includes('cast'));
  return (
    <section>
      {movieData && (
        <div>
          <button onClick={() => goBack()}>← Go back</button>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : moviePlaceholder
            }
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
