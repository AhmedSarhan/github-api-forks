import clsx from 'clsx';
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { ActionTypes } from './../../Store/Utils/ActionTypes';
const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch: Dispatch<any> = useDispatch();

  const changeThemeHandler = (type: string) => {
    setCurrentTheme(type);
    dispatch({
      type: ActionTypes.CHANGE_THEME,
      payload: type
    })
  }
  return (
    <div className={styles.themeContainer}>
      <button className={clsx(styles.btn, currentTheme === 'dark' ? styles.activeBtn : '')}
        disabled={currentTheme === 'dark'}
        onClick={() => changeThemeHandler('dark')}
      >
        <i className="far fa-moon"></i>
      </button>
      <button className={clsx(styles.btn, currentTheme === 'light' ? styles.activeBtn : '')}
        disabled={currentTheme === 'light'}
        onClick={() => changeThemeHandler('light')}
      >
        <i className="fas fa-sun"></i>
      </button>
    </div>
  )
}

export default ThemeButton
