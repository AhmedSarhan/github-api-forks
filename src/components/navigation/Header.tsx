import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar';
import styles from './Header.module.scss'
import ThemeButton from './ThemeButton';
const Header = () => {
  return (
    <div className={clsx(styles.header,
      "flex justify-space-between items-center py-1 px-2 ")}>
      <NavLink exact to="/" activeClassName={styles.active}>
        Home
      </NavLink>
      <SearchBar />
      <ul className="flex justify-center items-center">
        <li className="mx-1">
          <NavLink exact to="favorites" activeClassName={styles.active}>Favorites</NavLink>
        </li>
        <li className="mx-1">
          <ThemeButton />
        </li>
      </ul>
    </div>
  )
}

export default Header
