import React from 'react';
import {Fragment} from 'react';
import Header from './components/Header';
import './App.css';
import {GridListChart} from "./components/charts/grid-list-card";
import { repoList } from './repoList.const';
import {MyModal} from "./components/ui/Dialog";
import {Card} from "./components/ui/card";
function App() {
    return (
        <Fragment>
            <Header/>
            <div className="py-14">
                <div className="p-1 mx-4">
                    <div className="grid md:shrink-0 xl:grid-cols-2 lg:grid-col-1  gap-1 gap-y-1  -">
                        {repoList.map((repo, index) => (
                            <div key={index} className="p-1 text-center bg-white">
                                <Card style={{width: `{width}rem`}} className="shadow-xl rounded-[2px] ">
                                    <>
                                        <div className="grid grid-cols-2 overflow-col pt-2 pr-2">
                                            <div></div>
                                            <div className="place-self-end">
                                                <MyModal>
                                                    <GridListChart width={57} location={`${repo.Repo_name}.json`}
                                                                   tittle={repo.Display_name}
                                                                   key={repo.Repo_name} lineRange={repo.max}/>
                                                </MyModal>
                                            </div>
                                        </div>
                                        <GridListChart width={57} location={`${repo.Repo_name}.json`}
                                                       tittle={repo.Display_name}
                                                       key={repo.Repo_name} lineRange={repo.max}/>
                                    </>


                                </Card>
                            </div>)
                        )}
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default App;
