import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {selectAllCharts, chartAdded, chartUpdated, fetchData, selectChart} from "../../store/dataSlice";
import React, { useEffect } from "react";
import classes from "./Charts.module.css"
import Chart from "chart.js/auto"; // Ensure you're importing 'auto' bundle for Chart.js 4.x
import 'chartjs-adapter-date-fns';

const LineChartComponent = ({ location }) => {
    const dispatch = useDispatch();
    const charts = useSelector(state => selectChart(state, location));
    // Fetch charts data or perform any necessary initializations
    useEffect(() => {
        dispatch(fetchData(location))
    }, [dispatch]);


    return (
        <main className={classes.charts}>
        <div>
            {charts && <Line data={ charts } />}
        </div>
        </main>
    );
};

export default LineChartComponent;
