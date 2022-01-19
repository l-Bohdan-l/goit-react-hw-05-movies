import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';

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
      {movieReview && (
        <ul>
          {movieReview.map(review => (
            <li key={review.id}>
              <span>{review.author}</span>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
