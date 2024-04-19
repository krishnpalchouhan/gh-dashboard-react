import classes from "./Charts.module.css"
import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto"; // Ensure you're importing 'auto' bundle for Chart.js 4.x

import 'chartjs-adapter-date-fns';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
    ],
};
const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }
    ],
};
const options = {
    scales: {
        // x: {
        //     type: 'time',
        //     time: {
        //         unit: 'month',
        //     },
        // },
        y: {
            min: 0,
            max: 100,
        },
    },
};

export default function MultiLineChart() {
  return (
      <main className={classes.charts}>
          <div>
              <h2>Multi-Line Chart</h2>
              <Line data={data1} options={options} />
          </div>

      </main>
  );
}