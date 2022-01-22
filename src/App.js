import './App.scss';
import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

import { HomePage } from './components/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { MoviesPage } from './components/MoviesPage/MoviesPage';
import { MoviePage } from './components/MovieDetailsPage/MovieDetailsPage';
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Header />

        <Suspense fallback={<h2>Loading ...</h2>}>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/movies" exact element={<MoviesPage />} />
            <Route path="/movies/:id" exact element={<MoviePage />}>
              <Route path="cast" exact element={<Cast />} />
              <Route path="reviews" exact element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
