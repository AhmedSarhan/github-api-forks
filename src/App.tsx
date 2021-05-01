import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';
import { ActionTypes } from './Store/Utils/ActionTypes';
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux'

import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import axios from 'axios'
function App() {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    axios.get(`https://nuxt-blog-4711b.firebaseio.com/favs.json`)
      .then(res => {
        let favorites = []
        for (let key in res.data) {
          favorites.push({ ...res.data[key], fav: true })
        }
        dispatch({
          type: ActionTypes.FETCH_FAVS,
          payload: favorites
        })
      })
      .catch(err => {
        console.log(err)
      })
    dispatch({
      type: ActionTypes.FETCH_FAVS
    })
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/search" >
          <Search />
        </Route>
        <Route path="/favorites" >
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
