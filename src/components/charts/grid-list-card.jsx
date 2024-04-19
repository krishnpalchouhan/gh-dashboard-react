
import {ApexCharts} from "./apex-chart";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectChart} from "../../store/dataSlice";
import React, {useEffect, useState} from "react";
import { CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card";
import KTabs from "../ui/Tabs";
import {DataTable} from "../data-table";
// import {MultiStepLoader as Loader} from "../ui/multi-step-loader";

// const loadingStates = [
//     {
//         text: "Stay Ahead Stay Secure",
//     },
//     {
//         text: "Just A sec Away",
//     },
//     {
//         text: "We are almost there",
//     },
//     {
//         text: "We are ready to go",
//     },
// ];

export const GridListChart = ({ location, width = 30, tittle, lineRange}) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const data = useSelector(state => selectChart(state, location));


    // Fetch charts data or perform any necessary initializations
    useEffect(() => {
        setLoading(true);
        dispatch(fetchData(location)).then(() => {
            setTimeout(()=>{
                setLoading(false)
            },5)

        });
    }, [dispatch]);

    const CardEl = <>
        {loading &&
            <div className=" flex justify-center content-center items-center">
                <div className="loader ">
                </div>
            </div>
        }
        {/*{!data && <Loader loadingStates={loadingStates} loading={loading} duration={500}/>}*/}
        {!loading &&  <>
      <CardHeader className="pt-0">
            <CardTitle className="text-gray-500">
            {tittle}
            </CardTitle>
            {/*<CardDescription>--------------</CardDescription>*/}
        </CardHeader>
        <CardContent>
            <KTabs
                tabs={[
                    {
                        name: 'Grid View',
                        children: (
                            <>
                                {data && <ApexCharts data={data} lineRange={lineRange}/>}
                            </>
                        ),
                    },
                    {
                        name: 'List View',
                        children: (
                            <>
                                {data && <DataTable gridData={data.gridData} location={location}/>}
                            </>
                        ),
                    },
                ]}

            />
        </CardContent>
        <CardFooter>

        </CardFooter>
      </>  }
    </>
    return (
        <>
            {CardEl}
        </>
    );

};

