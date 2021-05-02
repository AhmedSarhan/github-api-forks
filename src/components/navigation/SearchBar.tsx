import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Header.module.scss';
import { ActionTypes } from './../../Store/Utils/ActionTypes';
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux'
import { useHistory } from 'react-router-dom'

interface searchData {
  query: string
}
const SearchBar = () => {
  const { register, reset, handleSubmit, errors } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onBlur'
  })
  const history = useHistory()
  const dispatch: Dispatch<any> = useDispatch()
  const searchHandler = (data: searchData) => {
    let owner = data.query.split('/')[0]
    let repoName = data.query.split('/')[1]
    fetch(`https://api.github.com/repos/${owner}/${repoName}/forks`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ActionTypes.FETCH_REPOS,
          payload: data
        })
      })
      .catch(err => {
        console.log(err)
      })

    history.push(`/search`)
  }
  return (
    <form onSubmit={handleSubmit(searchHandler)}>
      <div className="flex justify-space-around items-center w-full">
        <input type="text" name="query" ref={register({
          required: 'Please Enter a gitHub name first',
          pattern: {
            value: /([A-Za-z])(\/)([A-Za-z])/,
            message: 'Valid Github Repos should be in the format: owner/repo_name'
          }
        })} />
        <button className="btnSubmit">
          Search
        </button>
      </div>

      {errors.query &&
        <span className={styles.errorMsg}>{errors.query?.message}</span>
      }
    </form>
  )
}

export default SearchBar
