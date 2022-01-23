import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';
import castPlaceholder from '../../images/cast-placeholder.png';
import styles from './Cast.module.scss';
import PropTypes from 'prop-types';

export default function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(data => {
      setMovieCast(data.cast);
    });
  }, []);

  return (
    <section>
      {movieCast && (
        <ul className={styles.castList}>
          {movieCast.map(actor => (
            <li className={styles.castListItem} key={actor.cast_id}>
              <img
                className={styles.castImg}
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

Cast.propTypes = {
  actor: PropTypes.shape({
    cast_id: PropTypes.number,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};
