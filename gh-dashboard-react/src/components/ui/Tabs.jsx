import React from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function KTabs({ tabs, tittle='' }) {

    return (
            <Tab.Group>
                <div className="flex px-4 py-2">
                    <h1 className="text-xl font-bold">{tittle.toString().toUpperCase().replace('-',' ')}</h1>
                    <Tab.List className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground ml-auto"
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
