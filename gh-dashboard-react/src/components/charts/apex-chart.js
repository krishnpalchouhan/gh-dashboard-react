import Chart from 'react-apexcharts'
import React, {Component} from 'react';
export class ApexCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: props.data.datasets[0].data
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    id: 'areachart-2'
                },
                annotations: {
                    yaxis: [{
                        y: props?.support?.lineRange ? props.support.lineRange : 0,
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                color: '#fff',
                                background: '#00E396',
                            },
                            text: 'Max allowed warning count',
                        }
                    },
                    //     {
                    //     y: props.support.range?.min ? props.support.range.min : 0,
                    //     y2: props.support.range?.max ? props.support.range.max : 0,
                    //     borderColor: '#000',
                    //     fillColor: '#FEB019',
                    //     opacity: 0.2,
                    //     label: {
                    //         borderColor: '#333',
                    //         style: {
                    //             fontSize: '10px',
                    //             color: '#333',
                    //             background: '#FEB019',
                    //         },
                    //         text: 'Y-axis range',
                    //     }
                    // }
                    ],
                    xaxis: [{
                        x: new Date('23 Nov 2017').getTime(),
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: 'Release Date',
                        }
                    },
                        // {
                        //     x: new Date('26 Nov 2017').getTime(),
                        //     x2: new Date('28 Nov 2017').getTime(),
                        //     fillColor: '#B3F7CA',
                        //     opacity: 0.4,
                        //     label: {
                        //         borderColor: '#B3F7CA',
                        //         style: {
                        //             fontSize: '10px',
                        //             color: '#fff',
                        //             background: '#00E396',
                        //         },
                        //         offsetY: -10,
                        //         text: 'X-axis range',
                        //     }
                        // }
                        ],
                    // points: [{
                    //     x: new Date('01 Dec 2017').getTime(),
                    //     y: 8607.55,
                    //     marker: {
                    //         size: 8,
                    //         fillColor: '#fff',
                    //         strokeColor: 'red',
                    //         radius: 2,
                    //         cssClass: 'apexcharts-custom-class'
                    //     },
                    //     label: {
                    //         borderColor: '#FF4560',
                    //         offsetY: 0,
                    //         style: {
                    //             color: '#fff',
                    //             background: '#FF4560',
                    //         },
                    //
                    //         text: 'Point Annotation',
                    //     }
                    // },
                    //     {
                    //     x: new Date('08 Dec 2017').getTime(),
                    //     y: 9340.85,
                    //     marker: {
                    //         size: 0
                    //     },
                    //     image: {
                    //         path: '../../assets/images/ico-instagram.png'
                    //     }
                    // }]
                },
                dataLabels: {
                    enabled: true,
                    position: 'bottom',
                    offsetX: 90
                },
                markers: {
                    size: 0,
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    padding: {
                        right: 30,
                        left: 20
                    }
                },
                title: {
                    text: 'Build warning count',
                    align: 'left'
                },
                labels: props.data.labels,
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    tickAmount: 3,
                    logarithmic: false,
                    labels: {
                        formatter: function(val) {
                            return val.toFixed(0)
                        }
                    },
                }
            },


        };
    }
    render() {
        return (
            <div>
                <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="line" height={350}/>
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}