
import {ApexCharts} from "./apex-chart";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectChart} from "../../store/dataSlice";
import React, { useEffect } from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../card";
import TabsDemo from "../Tabs";
import {DataTable} from "../data-table";

export const GridListChart = ({ location, width = 30 }) => {
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
        dispatch(fetchData(location))
    }, [dispatch]);

    const tittle = location.replace('.json','').toUpperCase();
    return (

        <Card style={{width: `{width}rem`}} className="shadow-md">
            <CardHeader>
                <CardTitle>{tittle} </CardTitle>
                <CardDescription>--------------</CardDescription>
            </CardHeader>
            <CardContent>
                <TabsDemo
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

