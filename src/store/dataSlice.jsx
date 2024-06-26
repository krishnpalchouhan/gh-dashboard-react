// In your slice file, e.g., chartSlice.js

import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';


// Create an entity adapter
const chartsAdapter = createEntityAdapter({
    // This defines the unique ID for each chart
    selectId: chart => chart.id,
    // This sorts the charts based on their 'name' field
    // sortComparer: (a, b) => a.name.localeCompare(b.name)
});

// Initial state for charts slice
const initialState = chartsAdapter.getInitialState({
    // Additional fields can be added here if needed
    status: 'idle',
    error: null
});

// Create a slice
const chartSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        chartUpdated: chartsAdapter.updateOne,
        chartAdded: chartsAdapter.addOne,
        chartUpdate: chartsAdapter.updateOne,
    }
});

// Export action creators
export const { chartUpdated, chartAdded, chartUpdate } = chartSlice.actions;

// Export the reducer
export default chartSlice.reducer;

// Selectors
export const {
    selectAll: selectAllCharts,
    selectById: selectChartById,
    selectIds: selectChartIds
} = chartsAdapter.getSelectors(state => state.charts);


export const selectChart = (state, chartId) => selectChartById(state, chartId);

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (location, thunkAPI) => {
        let resultChart =  {
            id: location,
            labels: [],
            datasets: [
                {
                    label: location.replace('.json',''),
                    data: [],
                    borderColor: `rgba(${ Math.floor(Math.random() * 255)}, ${ Math.floor(Math.random() * 255)}, ${ Math.floor(Math.random() * 255)}, 1)`,
                    backgroundColor: `rgba(${ Math.floor(Math.random() * 255)}, ${ Math.floor(Math.random() * 255)}, ${ Math.floor(Math.random() * 255)}, 0.2)`,
                }
            ],
            gridData:[],
        }
        try {
            const response = await fetch(`/assets/data/${location}`);
            // await new Promise(resolve => setTimeout(resolve, 500));
            return await response.json().then(data => {
                data.forEach(dataObj => {
                    resultChart.datasets[0].data.push(dataObj['warning_count']);
                    resultChart.labels.push(dataObj['date']);
                    resultChart.gridData.push(dataObj);
                });
                thunkAPI.dispatch(chartAdded(resultChart));
                return resultChart;
            })
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);
