import React from 'react'
import { useSelector } from "react-redux";

import PageLayout from './../layouts/PageLayout';
import RepoCard from './../components/repos/RepoCard';
import { RepoType } from '../utils/types/ReposType';
import { ReposList } from './../components/repos/ReposList';
import { ReducerStateType } from '../Store/Utils/storeTypes';

const repo: RepoType = {
  id: 126878558,
  name: "react-hook-form",
  full_name: "AhmedSarhan/react-hook-form",
  owner: {
    login: "AhmedSarhan",
    avatar_url: "https://avatars.githubusercontent.com/u/20737908?v=4",
    html_url: "https://github/AhmedSarhan",
  },
  html_url: "https://github/AhmedSarhan/react-hook-form",
  forks_count: 5,
  topics: ["React", "React Hook Form", "React Forms"],
  stargazers_count: 40
}
const Favorites = () => {
  const favList: RepoType[] = useSelector((state: ReducerStateType) => state.favoritesList)
  return (
    <PageLayout>
      <h3 className="text-center page-title">Fav list</h3>
      {favList && favList.length > 0 ? <ReposList repos={favList} /> :
        <h5 className="my-4 text-center">There are no favorites yet</h5>
      }
    </PageLayout>
  )
}

export default Favorites
