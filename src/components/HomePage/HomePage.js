import { fetchTrandingMovies } from '../../services/ApiSrvice';
import { useState, useEffect } from 'react';

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
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </>
  );
}
