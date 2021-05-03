import React, { useState } from 'react'
import PageLayout from './../layouts/PageLayout';
import { ReposList } from './../components/repos/ReposList';
import { RepoType } from '../utils/types/ReposType';
import { ReducerStateType } from '../Store/Utils/storeTypes';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { ActionTypes } from './../Store/Utils/ActionTypes';
const Search = () => {
  const searchList: RepoType[] = useSelector((state: ReducerStateType) => state.repoList)
  // const currentPage: number = useSelector((state: ReducerStateType) => state.currentPage)
  const dispatch: Dispatch<any> = useDispatch()
  const handlePageChange = (selectedObject: any) => {
    dispatch({
      type: ActionTypes.CHANGE_PAGE,
      payload: selectedObject?.selected + 1
    })
  };
  return (
    <PageLayout>
      <h3 className="text-center page-title">search results</h3>
      {searchList.length > 0 ? <ReposList repos={searchList} /> :
        <h5 className="my-4 text-center">There are no forks for that repo, try another repo</h5>
      }

      {searchList.length > 0 && <ReactPaginate
        pageCount={15}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={styles.container}
        previousLinkClassName={styles.page}
        breakClassName={styles.page}
        nextLinkClassName={styles.page}
        pageClassName={styles.page}
        disabledClassName={styles.disabled}
        activeClassName={styles.active}
        previousLabel={`←`}
        nextLabel={`→`}
      />}
    </PageLayout>
  )
}

export default Search
