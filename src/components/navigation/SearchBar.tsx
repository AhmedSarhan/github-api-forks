import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Header.module.scss';
import { ActionTypes } from './../../Store/Utils/ActionTypes';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from 'redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { ReducerStateType } from '../../Store/Utils/storeTypes';
interface searchData {
  query: string
}
const SearchBar = () => {
  const { register, reset, handleSubmit, errors } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onBlur'
  })
  const history = useHistory()
  const dispatch: Dispatch<any> = useDispatch();
  const initialRun = useRef(false);
  const currentPage: number = useSelector((state: ReducerStateType) => state.currentPage)
  const [searchQuery, setSearchQuery] = useState<searchData>({
    query: ""
  })
  const searchHandler = (data: searchData) => {
    setSearchQuery(data)
    let owner = data.query.split('/')[0]
    let repoName = data.query.split('/')[1]

    axios.get(`https://api.github.com/repos/${owner}/${repoName}/forks`, {
      params: {
        page: currentPage,
        per_page: 30
      }
    })
      .then(res => {
        dispatch({
          type: ActionTypes.FETCH_REPOS,
          payload: res?.data
        })
      })
      .catch(err => {
        console.log(err)
      })

    history.push(`/search`)
  }
  useEffect(() => {
    console.log(initialRun.current)
    if (initialRun.current) {
      console.log(currentPage)
      searchHandler(searchQuery);
      return
    }
    console.log('first')
    initialRun.current = true
  }, [currentPage])
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
