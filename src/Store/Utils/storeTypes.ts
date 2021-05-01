import { RepoType } from '../../utils/types/ReposType'

export type ReducerStateType = {
  repoList: RepoType[],
  favoritesList: RepoType[]
}
export type Action = {
  type: string;
  payload: any
}