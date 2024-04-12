
import {ApexCharts} from "./apex-chart";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectChart} from "../../store/dataSlice";
import React, {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import KTabs from "../ui/Tabs";
import {DataTable} from "../data-table";
import {MultiStepLoader as Loader} from "../ui/multi-step-loader";

const loadingStates = [
    {
        text: "Stay Ahead Stay Secure",
    },
    {
        text: "Just A sec Away",
    },
    {
        text: "We are almost there",
    },
    {
        text: "We are ready to go",
    },
    {
        text: "Start a fight",
    },
    {
        text: "We like it",
    },
    {
        text: "Welcome to F**** C***",
    },
];
export const GridListChart = ({ location, width = 30 }) => {
    const [loading, setLoading] = useState(false);
    const support = {
        lineRange: 6,
        range:{
            max: 6,
            min: 0
        }
    }
    const dispatch = useDispatch();
    const data = useSelector(state => selectChart(state, location));
    // Fetch charts data or perform any necessary initializations
    useEffect(() => {
        setLoading(true);
        dispatch(fetchData(location))
    }, [dispatch]);

    const tittle = location.replace('.json','').toUpperCase().replace('-',' ');
    return (

        <Card style={{width: `{width}rem`}} className="shadow-md">
            {!data && <Loader loadingStates={loadingStates} loading={loading} duration={500} />}
            <CardHeader>
                <CardTitle>{tittle} </CardTitle>
                {/*<CardDescription>--------------</CardDescription>*/}
            </CardHeader>
            <CardContent>
                <KTabs
                    tabs={[
                        {
                            name: 'GridView',
                            children: (
                                <>
                                    {data && <ApexCharts data={data} support={support}/>}
                                </>
                            ),
                        },
                        {
                            name: 'ListView',
                            children: (
                                <>
                                {data && <DataTable gridData={data.gridData}/>}
                                </>
                            ),
                        },
                    ]}

                />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );
};

