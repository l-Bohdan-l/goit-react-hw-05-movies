import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.scss';

export default function Reviews() {
  const [movieReview, setMovieReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(data => {
      setMovieReview(data.results);
    });
  }, []);

  console.log('reviews', movieReview);

  return (
    <section>
      {movieReview?.length > 0 ? (
        <ul className={styles.reviewList}>
          {movieReview.map(review => (
            <li key={review.id}>
              <span className={styles.reviewAuthor}>
                Author: {review.author}
              </span>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any Reviews for this movie.</p>
      )}
    </section>
  );
}
