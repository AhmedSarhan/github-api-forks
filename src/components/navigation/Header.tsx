import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar';
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={clsx(styles.header, "flex justify-space-between items-center mb-2 py-1 px-2")}>
      <NavLink exact to="/" activeClassName={styles.active}>
        Home
      </NavLink>
      <SearchBar />
      <ul>
        <li>
          <NavLink exact to="favorites" activeClassName={styles.active}>Favorites</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
