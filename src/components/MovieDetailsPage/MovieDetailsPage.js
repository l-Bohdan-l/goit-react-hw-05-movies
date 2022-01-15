import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/ApiSrvice';

export function MoviePage(id) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchMovie(id).then(data => setMovieData(data));
  }, [id]);

  return <section></section>;
}
