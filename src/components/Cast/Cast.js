import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';

export function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(data => {
      setMovieCast(data.cast);
    });
  }, []);

  console.log('cast', movieCast);
  // console.log('cast id', id)

  return <h3>Cast</h3>;
}
