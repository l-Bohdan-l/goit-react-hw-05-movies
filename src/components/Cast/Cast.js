import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';
import castPlaceholder from '../../images/cast-placeholder.png';

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

  return (
    <section>
      {movieCast && (
        <ul>
          {movieCast.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : castPlaceholder
                }
                alt={actor.name}
              />
              <div>
                <span>{actor.name}</span>
                <span>Character: {actor.character}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
