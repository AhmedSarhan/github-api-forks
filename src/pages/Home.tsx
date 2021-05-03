import React from 'react'
import clsx from 'clsx'
import PageLayout from './../layouts/PageLayout';
import styles from './home.module.scss'
const Home = () => {
  return (
    <PageLayout>
      <i className={clsx(styles.mainLogo, "fab fa-github-alt")}></i>
    </PageLayout>
  )
}

export default Home
