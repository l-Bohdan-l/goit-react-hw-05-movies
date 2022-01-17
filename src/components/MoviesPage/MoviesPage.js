import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const sortOrder = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    setResult(sortOrder);
  }, []);
  console.log(sortOrder);
  console.log(location);

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
    console.log(e.target);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Empty input value');
      return;
    }
    console.log('search', searchQuery);
    setResult(searchQuery);
    console.log('res', result);
    navigate(`?query=${searchQuery}`);
    // { onSubmit }
    setSearchQuery('');
    console.log('end res', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">search</button>

      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        type="text"
        placeholder="Search images and photos"
      />
    </form>
  );
}
