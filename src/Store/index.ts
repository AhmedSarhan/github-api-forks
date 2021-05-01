
import { createStore, applyMiddleware, Store } from "redux";
import { FavsReducer } from './Reducers/favoritesReducer';
import thunk from "redux-thunk";
import { Action, ReducerStateType } from './Utils/storeTypes';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export const store: Store<any, Action> & {
  dispatch: any
} = createStore(FavsReducer as any,
  composeEnhancers(applyMiddleware(thunk)))