import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? '#e96e1d' : 'black',
                })}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? '#e96e1d' : 'black',
                })}
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
