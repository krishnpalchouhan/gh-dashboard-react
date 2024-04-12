import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {selectAllCharts, chartAdded, chartUpdated, fetchData, selectChart} from "../../store/dataSlice";
import React, { useEffect } from "react";
import classes from "./Charts.module.css"
import Chart from "chart.js/auto"; // Ensure you're importing 'auto' bundle for Chart.js 4.x
import 'chartjs-adapter-date-fns';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../card";

const LineChartComponent = ({ location, width = 30 }) => {
    const dispatch = useDispatch();
    const charts = useSelector(state => selectChart(state, location));
    // Fetch charts data or perform any necessary initializations
    useEffect(() => {
        dispatch(fetchData(location))
    }, [dispatch]);


    return (

            <Card style={{width: `${width}rem`}} className="shadow shadow-md">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        {charts && <Line style={{width: '55rem', height: '50rem'}} data={charts}/>}
                    </div>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
    );
};

export default LineChartComponent;
