import React from 'react';
import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import './App.css';
import {useSelector} from "react-redux";

import UserProfile  from "./components/UserProfile";
import {RootState} from "./store";
function App() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
      <Fragment>
        <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile/> }
        <Counter />
      </Fragment>
  );
}

export default App;
