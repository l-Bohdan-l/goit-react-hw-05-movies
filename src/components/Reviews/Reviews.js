import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/ApiSrvice';
import { useParams } from 'react-router-dom';

export function Reviews() {
  const [movieReview, setMovieReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(data => {
      setMovieReview(data.results);
    });
  }, []);

  console.log('reviews', movieReview);

  return <h3>Reviews</h3>;
}
