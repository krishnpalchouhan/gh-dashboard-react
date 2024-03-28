import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "./store";
import LineChartComponent from "./components/charts/line-chart";
function App() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
      <Fragment>
        <Header />
          <LineChartComponent location={'repo1-name.json'}/>
          <LineChartComponent location={'repo2-name.json'}/>
      </Fragment>
  );
}

export default App;
