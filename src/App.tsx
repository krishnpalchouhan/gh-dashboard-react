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
          <div className="max-h-svh">
              <div
                  className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
                  <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                      <defs>
                          <pattern id=":S1:" width="128" height="128" patternUnits="userSpaceOnUse" x="100%" y="100%"
                                   patternTransform="translate(112 64)">
                              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                          </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#:S1:)"></rect>
                  </svg>
              </div>
          </div>
          <Header/>
          <LineChartComponent location={'repo1-name.json'}/>
          <LineChartComponent location={'repo2-name.json'}/>
      </Fragment>
  );
}

export default App;
