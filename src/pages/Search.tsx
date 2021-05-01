import React from 'react'
import PageLayout from './../layouts/PageLayout';
import { ReposList } from './../components/repos/ReposList';
import { RepoType } from '../utils/types/ReposType';
import { ReducerStateType } from '../Store/Utils/storeTypes';
import { useSelector } from 'react-redux';

const Search = () => {
  const searchList: RepoType[] = useSelector((state: ReducerStateType) => state.repoList)

  return (
    <PageLayout>
      <h3>search results</h3>
      {searchList.length > 0 ? <ReposList repos={searchList} /> :
        <h5 className="my-4 text-center">There are no forks for that repo, try another repo</h5>
      }
    </PageLayout>
  )
}

export default Search
