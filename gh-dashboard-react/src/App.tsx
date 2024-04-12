import React from 'react';
import {Fragment} from 'react';
import Header from './components/Header';
import './App.css';
import {ApexLineChart} from "./components/charts/apex-line-char";
import {DataTableDemo} from "./components/data-table";
import TabsDemo from "./components/Tabs";

function App() {
    return (
        <Fragment>
            <Header/>
            <div className="py-14">
                <div className="p-1 mx-8">
                    <div className="grid  grid-cols-2  gap-4 gap-y-2 grid-flow-row grid-">
                        <div className="p-1 text-center bg-white">
                            <TabsDemo
                                tabs={[
                                    {
                                        name: 'ApexLineChart',
                                        children: (
                                            <>
                                                <ApexLineChart width={57} location={'repo1-name.json'}/>
                                            </>
                                        ),
                                    },
                                    {
                                        name: 'DataTableDemo',
                                        children: (
                                            <>
                                                <DataTableDemo/>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                        <div className="p-1 text-center bg-white">
                            <ApexLineChart width={57} location={'repo1-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <ApexLineChart width={57} location={'repo2-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <ApexLineChart width={57} location={'repo3-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <ApexLineChart width={57} location={'repo4-name.json'}/>
                        </div>
                        <div className="p-1 text-center bg-white">
                            <ApexLineChart width={57} location={'repo5-name.json'}/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default App;
