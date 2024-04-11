import React from 'react';
import {Fragment} from 'react';
import Header from './components/Header';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "./store";
import LineChartComponent from "./components/charts/line-chart";

function App() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
        <Fragment>
            <Header/>
            <div className="py-14">
                <div className="p-1 mx-14">
                    <div className="grid grid-cols-2 gap-4 gap-y-6 grid-flow-row grid-">
                        <div className="p-1 text-center bg-white">
                            <LineChartComponent width={'50rem'} location={'repo1-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <LineChartComponent  width={'50rem'} location={'repo2-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <LineChartComponent  width={'50rem'} location={'repo3-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <LineChartComponent  width={'50rem'} location={'repo4-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <LineChartComponent  width={'50rem'} location={'repo5-name.json'}/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default App;
