import { Action, ReducerStateType } from '../Utils/storeTypes'
import { ActionTypes } from './../Utils/ActionTypes';

const initalState: ReducerStateType = {
  repoList: [],
  favoritesList: []
}
export const FavsReducer = (state: ReducerStateType = initalState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOS:
      let fetchedData = [...action.payload]
      if (fetchedData.length === 0) {
        return { ...state, repoList: [] };
      }
      let searchRepos = [];
      if (state.favoritesList.length > 0) {
        searchRepos = fetchedData.map((item) => {
          let index = state.favoritesList.findIndex((faved) => faved.id === item.id);
          if (index > -1) {
            return { ...item, fav: true };
          }
          return { ...item, fav: false };
        });
      } else {
        searchRepos = [...fetchedData]
      }
      return { ...state, repoList: [...searchRepos] }
    case ActionTypes.FETCH_FAVS:
      return {
        ...state,
        favoritesList: action.payload
      }
    case ActionTypes.ADD_TO_FAV: {
      let oldRepoList = [...state.repoList]
      let newRepoList = oldRepoList.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, fav: true }
        }
        return item
      })
      let newItem = { ...action.payload, fav: true }
      return {
        ...state,
        favoritesList: state.favoritesList.concat(newItem),
        repoList: [...newRepoList]

      }
    }
    case ActionTypes.DELETE_FROM_FAV: {
      let oldRepoList = [...state.repoList]
      let newRepoList = oldRepoList.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, fav: false }
        }
        return item
      })
      return {
        ...state,
        favoritesList: state.favoritesList.filter(items => items.id !== action.payload.id),
        repoList: [...newRepoList]

      }
    }
    default:
      return state;
  }
}