import { RepoType } from '../../utils/types/ReposType'

export type ReducerStateType = {
  repoList: RepoType[],
  favoritesList: RepoType[],
  currentPage: number,
  currentTheme: string
}
export type Action = {
  type: string;
  payload: any
}