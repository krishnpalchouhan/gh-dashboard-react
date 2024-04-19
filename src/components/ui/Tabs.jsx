import React from 'react'
import {Tab} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function KTabs({tabs, tittle = ''}) {

    return (
        <Tab.Group>
            <div className="grid grid-cols-3 overflow-col pt-2 pr-2 ">

                <div className="flex items-center gap-3 col-span-2">
                    {/*<span*/}
                    {/*    className="inline-flex  items-center rounded-md px-2 py-1 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/0  gap-2">*/}
                    {/*    Warning Threshold*/}
                    {/*    <span*/}
                    {/*    className="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-md font-bold text-white ring-1 ring-inset ring-green-500-700">3</span>*/}
                    {/*</span>*/}
                    {/*<span*/}
                    {/*    className="inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold text-cyan-700 ring-1 ring-inset ring-cyan-700/0 gap-2">Current Warning*/}

                    {/*    <span*/}
                    {/*        className="inline-flex items-center rounded-md bg-cyan-500  px-2 py-1 text-md font-bold text-white ring-1 ring-inset ring-cyan-700/10">3</span>*/}
                    {/*</span>*/}

                </div>
                <div className="flex col-last justify-end">
                    <Tab.List
                        className="inline-flex h-9 rounded-lg bg-muted p-1 text-muted-foreground"
                        data-orientation="horizontal" style={{outline: 'none'}}
                    >
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                className={({selected}) =>
                                    classNames(
                                        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-zinc-600 dark:text-zinc-200',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-cyan-950 hover:bg-white/[0.12]'
                                    )
                                }
                            >
                                {tab.name}
                            </Tab>
                        ))}
                    </Tab.List>
                </div>

            </div>

            <Tab.Panels>
                {tabs.map((tab, idx) => (
                    <Tab.Panel
                        key={tab.name}
                        className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white/60 ring-offset-2 ring-offset-cyan-600 focus:outline-none focus:ring-2'
                        )}
                    >
                        {tab.children}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}
