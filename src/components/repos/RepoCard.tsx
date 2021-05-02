import React, { useState } from 'react'
import clsx from 'clsx'
import { RepoType } from '../../utils/types/ReposType'
import styles from './Repos.module.scss'
import { motion } from "framer-motion"
import axios from 'axios'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux';
import { ActionTypes } from './../../Store/Utils/ActionTypes';
const RepoCard = ({ repo }: { repo: RepoType }) => {
  const dispatch: Dispatch<any> = useDispatch()
  const [faved, setFaved] = useState<boolean | undefined>(repo?.fav)
  const [hoveredState, setHoveredState] = useState<boolean>(false)
  const circleStyles = [
    {
      style: {
        backgroundColor: "#4158D0",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }
    },
    {
      style: {
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }
    },
    {
      style: {
        backgroundColor: "#00DBDE",
        backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
      }
    },
    {
      style: {
        backgroundColor: "#FFFFFF",
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",

      }
    },
    {
      style: {
        backgroundColor: "#85FFBD",
        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
      }
    },
  ]
  let circleStyle = circleStyles[Math.floor(Math.random() * (circleStyles.length - 0))].style
  const removeFromFavsHandler = () => {
    axios.delete(`https://nuxt-blog-4711b.firebaseio.com/favs/${repo.id}.json`,)
      .then(res => {
        console.log(res.data)
        dispatch({
          type: ActionTypes.DELETE_FROM_FAV,
          payload: repo
        })
      })
  }
  const addToFavsHandler = () => {
    axios.post('https://nuxt-blog-4711b.firebaseio.com/favs.json', repo)
      .then(res => {
        console.log(res.data)
        dispatch({
          type: ActionTypes.ADD_TO_FAV,
          payload: repo
        })
      })
  }
  return (
    <>
      <motion.div animate={{
        scale: hoveredState ? 1.2 : 1,
        boxShadow: hoveredState ? '-3px 3px 36px -1px rgba(0,0,0,0.75)' : 'none'
      }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={styles.repoCard}
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
      >
        <button onMouseEnter={() => setFaved(prev => !prev)}
          onMouseLeave={() => setFaved(prev => !prev)}
          onClick={repo.fav ? removeFromFavsHandler : addToFavsHandler}
        >
          {faved ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
        </button>
        <h5>
          <a href={repo?.html_url} className={styles.repoName} target="_blank" rel="noreferrer">
            {repo?.name}
          </a>
        </h5>
        <div className="my-1">
          <a href={repo?.owner?.html_url} className="flex content-flex-start items-center">
            <img className={styles.ownerAvatar} src={repo?.owner?.avatar_url} alt={repo?.owner?.login} />
            <p className={styles.ownerName}>{repo?.owner?.login}</p>
          </a>
        </div>
        <div className="mb-1 mt-2 flex justify-space-between items-center">
          <div className="flex justify-space-around items-center">
            {repo?.topics?.map(topic => (
              <div key={topic} className={clsx(styles.topic, "flex content-flex-start items-center")}>
                {/* circular icon */}
                <span className={styles.circularIcon} style={circleStyle}>

                </span>
                <span key={topic}>{topic}</span>
              </div>
            ))}
          </div>
          <div className={clsx(styles.details, "flex justify-space-around items-center")}>
            <div className="flex justify-flex-start items-center mx-1">
              {/* fork icon */}
              <i className="fas fa-code-branch"></i>
              <p>{repo?.forks_count}</p>
            </div>
            <div className="flex justify-flex-start items-center mx-1">
              {/* start icon */}
              <i className="fas fa-star" ></i>
              <p>{repo?.stargazers_count}</p>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default RepoCard
