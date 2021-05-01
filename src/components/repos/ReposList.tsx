import React from 'react'
import { RepoType } from '../../utils/types/ReposType'
import RepoCard from './RepoCard'
import styles from './Repos.module.scss'

export const ReposList = ({ repos }: { repos: RepoType[] }) => {
  return (
    <div className={styles.repoList}>
      {repos.map(repo => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  )
}
