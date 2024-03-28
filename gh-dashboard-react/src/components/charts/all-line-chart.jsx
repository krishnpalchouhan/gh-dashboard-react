import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {selectAllCharts, chartAdded, chartUpdated, fetchData} from "../../store/dataSlice";
import React, { useEffect } from "react";
import classes from "./Charts.module.css"
import Chart from "chart.js/auto"; // Ensure you're importing 'auto' bundle for Chart.js 4.x
import 'chartjs-adapter-date-fns';

const AllLineChartComponent = ({ location }) => {
    const dispatch = useDispatch();
    const charts = useSelector(selectAllCharts);

    // Fetch charts data or perform any necessary initializations
    useEffect(() => {
        dispatch(fetchData(location))
    }, [dispatch]);


    return (
        <main className={classes.charts}>
        <div>
            <h2>Chart List</h2>
            <ul>
                {charts.map(chart => (
                    <li key={chart.id}>
                        {chart && <Line data={ chart } />}
                    </li>
                ))}
            </ul>
        </div>
        </main>
    );
};

export default AllLineChartComponent;
