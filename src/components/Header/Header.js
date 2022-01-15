import styles from './Header.module.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { MoviesPage } from '../MoviesPage/MoviesPage';

export function Header() {
  return (
    <header>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/movies" exact element={<MoviesPage />} />
      </Routes>
    </header>
  );
}
