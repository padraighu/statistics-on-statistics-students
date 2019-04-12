function industry() {
    return Highcharts.chart('left-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Industry Destinations, Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['Finance', 'Techology', 'Consulting', 'Other'], //'Graduate Studies', 
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [{
            name: 'Rice',
            color: '#002469',
            data: [14, 8, 6, 3] // 17, 
        }, {
            name: 'Harvard',
            color: '#A51C30',
            data: [15, 8, 14, 3] // 2, 
        }, {
            name: 'Duke',
            color: '#0736A4',
            data: [3, 5, 5, 5] // 2, 
        }]
    });
}

function industryStacked() {
    return Highcharts.chart('right-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Industry Percentage by School, Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['Rice', 'Harvard', 'Duke'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '% of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Finance',
            data: [14, 15, 3]
        }, {
            name: 'Techology',
            data: [8, 8, 5]
        }, {
            name: 'Consulting',
            data: [6, 14, 5]
        }, {
            name: 'Other',
            data: [3, 3, 5]
        }]  
    });
}

function gender() {
    Highcharts.chart('chart-container', {
        title: {
            text: 'Gender Breakdown by School, Stats Students Class of 2018'
        },
        subtitle: {
            text: 'From left to right: Rice, Harvard, Duke'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                innerSize: '50%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Rice',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 32
            }, {
                name: 'Female',
                y: 16
            }],
            center: ['32%', '50%'],
            size: 100,
            dataLabels: {
                enabled: false
            }
        }, {
            type: 'pie',
            name: 'Harvard',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 29
            }, {
                name: 'Female',
                y: 13
            }],
            center: ['50%', '50%'],
            size: 100,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }, {
            type: 'pie',
            name: 'Duke',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 12
            }, {
                name: 'Female',
                y: 8
            }],
            center: ['68%', '50%'],
            size: 100,
            dataLabels: {
                enabled: false
            }
        }]
    });
}

function employer() {
    Highcharts.chart('chart-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top Employers Across Schools, Stats Students Class of 2018'
        },
        subtitle: {
            text: 'Click bar to see breakdown by school'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: '# of students'
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [
            {
                name: 'Employers',
                colorByPoint: true,
                data: [
                    {
                        name: 'McKinsey & Company',
                        y: 4,
                        drilldown: 'mck',
                        color: '#2c457d'
                    },
                    {
                        name: 'Microsoft',
                        y: 3,
                        drilldown: 'msft',
                        color: '#747474'
                    },
                    {
                        name: 'Goldman Sachs',
                        y: 3,
                        drilldown: 'gs',
                        color: '#7399C6'
                    },
                    {
                        name: 'Capital One',
                        y: 3,
                        drilldown: 'cof',
                        color: '#D22E1E'
                    },
                    {
                        name: 'Two Sigma',
                        y: 2,
                        drilldown: 'ts',
                        color: '#009aa6'
                    },
                    {
                        name: 'The Boston Consulting Group',
                        y: 2,
                        drilldown: 'bcg',
                        color: '#266A2E'
                    },
                    {
                        name: 'NERA Economic Consulting',
                        y: 2,
                        drilldown: 'nera',
                        color: '#0069ab'
                    },
                    {
                        name: 'Indeed',
                        y: 2,
                        drilldown: 'indeed',
                        color: '#1d59ef'
                    },
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: 'McKinsey & Company',
                    id: 'mck',
                    data: [
                        {name: 'Harvard', y: 3, color: '#A51C30'},
                        {name: 'Duke', y: 1, color: '#0736A4'}
                    ]
                },
                {
                    name: 'Microsoft',
                    id: 'msft',
                    data: [
                        {name: 'Rice', y: 2, color: '#002469'},
                        {name: 'Duke', y: 1, color: '#0736A4'}
                    ]
                },
                {
                    name: 'Goldman Sachs',
                    id: 'gs',
                    data: [
                        {name: 'Harvard', y: 2, color: '#A51C30'},
                        {name: 'Duke', y: 1, color: '#0736A4'}
                    ]
                },
                {
                    name: 'Capital One',
                    id: 'cof',
                    data: [
                        {name: 'Rice', y: 3, color: '#002469'}
                    ]
                },
                {
                    name: 'Two Sigma',
                    id: 'ts',
                    data: [
                        {name: 'Rice', y: 1, color: '#002469'},
                        {name: 'Harvard', y: 1, color: '#A51C30'}
                    ]
                },
                {
                    name: 'The Boston Consulting Group',
                    id: 'bcg',
                    data: [
                        {name: 'Rice', y: 1, color: '#002469'},
                        {name: 'Duke', y: 1, color: '#0736A4'}
                    ]
                },
                {
                    name: 'NERA Economic Consulting',
                    id: 'nera',
                    data: [
                        {name: 'Rice', y: 2, color: '#002469'}
                    ]
                },
                {
                    name: 'Indeed',
                    id: 'indeed',
                    data: [
                        {name: 'Rice', y: 2, color: '#002469'}
                    ]
                }
            ]
        }
    });
}

function majorStacked() {
    return Highcharts.chart('chart-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Additional Fields of Study by School, Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['Rice', 'Harvard', 'Duke'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '% of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            column: {
                stacking: 'percent'
            }
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [{
            name: 'Single Major',
            data: [4, 25, 5]
        }, {
            name: 'Computer Science',
            data: [9, 8, 7]
        }, {
            name: 'Economics',
            data: [19, 1, 3]
        }, {
            name: 'Mathematics',
            data: [2, 3, 0]
        }, {
            name: 'Psychology',
            data: [1, 2, 1]
        }, {
            name: 'Business',
            data: [3, 0, 0]
        }, {
            name: 'Mechanical Engineering',
            data: [2, 0, 0]
        }, {
            name: 'Chemical Engineering',
            data: [2, 0, 0]
        }, {
            name: 'Other',
            data: [2, 1, 3]
        }]  
    });
}

function title() {
    var text = 'PhD Student Load Forecasting Analyst Business Consultant Trader Business Analyst CEO Analyst Business Analyst Master\'s Student Business Analyst PhD Student Data Scientist Corporate Banking Analyst Associate Statistician Data Analytics Associate Analyst Master\'s Student Associate Operations Associate Research Associate Team Head Master\'s Student Associate Equity Research Analyst Software Engineer Research Associate Software Engineer Research Analyst Program Manager PhD Student Software Engineer Master\'s Student Data Scientist Project Analyst Associate Master\'s Student Math Teacher Data Scientist Technology Analyst Health Actuarial Analyst Business Analyst Master\'s Student Solutions Analyst Assistant Manager Research Engineer Global Capital Markets Associate Master\'s Student Business Analyst Business Analyst Business Analyst Associate Data Scientist Research Data Analyst Research Assistant Analyst PhD Student Investment Banking Analyst PhD Student Rotational Associate Associate Data Scientist Hybrid Trader Analyst Junior Research Scientist Software Engineer Software Engineer PhD Student Associate Strategy Associate Investment Banking Analyst Payments Analyst Technical Consultant Trading Analyst Management Consulting Associate Software Engineer PhD Student Associate Consultant Financial Analyst Financial Analyst Business Consultant Research Assistant Data Scientist Master\'s Student Data Scientist Software Engineer Master\'s Student Data Analyst Master\'s Student Digital Innovation Software Engineer Business Data Analyst Consultant Analyst Analytics Consultant Software Engineer Software Engineer Investment Banking Analyst Consultant Special Projects Officer Data Analyst Program Manager Master\'s Student Associate Data Scientist PhD Student Investment Banking Analyst Software Engineer Master\'s Student Master\'s Student Investment Banking Analyst Business Intelligence Specialist';
    var lines = text.split(/[,\. ]+/g);
    var data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

    return Highcharts.chart('chart-container', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'Job Titles Wordcloud, Stats Students Class of 2018'
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
    });
}

function growth() {
    return Highcharts.chart('chart-container', {

        title: {
            text: 'Stats Students Growth by School, 2009-2018'
        },
    
        subtitle: {
            text: 'Growth of stats students is a recent phenomena'
        },
    
        yAxis: {
            title: {
                text: '# of students'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2009
            }
        },
    
        series: [{
            name: 'Rice',
            data: [9, 2, 10, 10, 23, 17, 36, 51, 42, 57],
            color: '#002469'
        }, {
            name: 'Harvard',
            data: [4, 9, 13, 14, 23, 37, 45, 62, 57, 67],
            color: '#A51C30'
        }, {
            name: 'Duke',
            data: [5, 6, 10, 18, 9, 14, 24, 36, 35, 27],
            color: '#0736A4'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
    });
}

// Function to return an SVG path between two points, with an arc
function pointsToPath(from, to, invertArc) {
    var arcPointX = (from.x + to.x) / (invertArc ? 2.4 : 1.6),
        arcPointY = (from.y + to.y) / (invertArc ? 2.4 : 1.6);
    return 'M' + from.x + ',' + from.y + 
            ',' + to.x + ' ' + to.y;
}

function mapRice() {
    var mapRice = Highcharts.mapChart('left-chart', {
        title: {
            text: 'Metro Areas Rice Stats Students Move to'
        },
        legend: {
            align: 'left',
            layout: 'vertical',
            floating: true,
            enabled: false
        },
        mapNavigation: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return this.point.id;
            }
        },
        plotOptions: {
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[1]
                }
            }
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [{
            // Use the gb-all map with no data as a basemap
            mapData: Highcharts.maps['countries/us/us-all'],
            name: 'Basemap',
            borderColor: '#707070',
            nullColor: 'rgba(200, 200, 200, 0.3)',
            showInLegend: false
        }, {
            type: 'mappoint',
            name: 'Metropolitan Areas',
            enableMouseTracking: false,
            dataLabels: {
                format: '{point.id}'
            },
            data: [{
                id: 'Houston',
                lat: 29.7604,
                lon: -95.3698
            }, {
                id: 'New York',
                lat: 40.7128,
                lon: -74.0060
            }, {
                id: 'Bay Area',
                lat: 37.7749,
                lon: -122.4194
            }, {
                id: 'Dallas / Fort Worth',
                lat: 32.7767,
                lon: -96.7970
            }, {
                id: 'Seattle',
                lat: 47.6062,
                lon: -122.3321
            }, {
                id: 'Washington D.C.',
                lat: 38.9072,
                lon: -77.0369
            }, {
                id: 'Philadephia',
                lat: 39.9526,
                lon: -75.1652
            }, {
                id: 'Los Angeles',
                lat: 34.0522,
                lon: -118.2437
            }, {
                id: 'Chicago',
                lat: 41.8781,
                lon: -87.6298
            }, {
                id: 'Boston',
                lat: 42.3601,
                lon: -71.0589
            }]
        }]
    });

    var ricePoint = mapRice.get('Houston');
    // Add a series of lines for London
    mapRice.addSeries({
        name: 'Destinations',
        type: 'mapline',
        lineWidth: 2,
        color: '#BABABA',
        enableMouseTracking: false,
        data: [{
            id: '1',
            path: pointsToPath(ricePoint, mapRice.get('Bay Area')),
            lineWidth: 4,
            color: '#000000'
        }, {
            id: '2',
            path: pointsToPath(ricePoint, mapRice.get('Dallas / Fort Worth'), true),
            lineWidth: 3,
            color: '#000000'
        }, {
            id: '3',
            path: pointsToPath(ricePoint, mapRice.get('Seattle')),
            lineWidth: 3,
            color: '#000000'
        }, {
            id: '4',
            path: pointsToPath(ricePoint, mapRice.get('Washington D.C.'), true)
        }, {
            id: '5',
            path: pointsToPath(ricePoint, mapRice.get('Los Angeles'), true)
        }, {
            id: '6',
            path: pointsToPath(ricePoint, mapRice.get('Chicago'), true)
        }, {
            id: '7',
            path: pointsToPath(ricePoint, mapRice.get('Boston'), true)
        }, {
            id: '8',
            path: pointsToPath(ricePoint, mapRice.get('Philadephia'), true)
        }, {
            id: '9',
            path: pointsToPath(ricePoint, mapRice.get('New York'), true),
            lineWidth: 4,
            color: '#000000'
        }]
    });
    return mapRice;
}

function locationRice() {
    return Highcharts.chart('right-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Metro Area Distribution, Rice Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['Houston', 'New York', 'Bay Area', 'Dallas / Fort Worth', 'Seattle', 'Other'], //'Washington DC', 'Philadelphia', 'Los Angeles', 'Chicago', 'Boston',
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        var pcnt = (this.y / this.series.data.map(p => p.y).reduce((a, b) => a + b, 0)) * 100;
                        return Highcharts.numberFormat(pcnt) + '%';
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Rice',
            color: '#002469',
            data: [13, 7, 7, 4, 3, 14] //2, 2, 2, 2, 2
        }]
    });
}

function mapHarvard() {
    var mapHarvard = Highcharts.mapChart('left-chart', {
        title: {
            text: 'Metro Areas Harvard Stats Students Move too'
        },
        legend: {
            align: 'left',
            layout: 'vertical',
            floating: true,
            enabled: false
        },
        mapNavigation: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return this.point.id;
            }
        },
        plotOptions: {
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[1]
                }
            }
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [{
            // Use the gb-all map with no data as a basemap
            mapData: Highcharts.maps['countries/us/us-all'],
            name: 'Basemap',
            borderColor: '#707070',
            nullColor: 'rgba(200, 200, 200, 0.3)',
            showInLegend: false
        }, {
            type: 'mappoint',
            name: 'Metropolitan Areas',
            enableMouseTracking: false,
            dataLabels: {
                format: '{point.id}'
            },
            data: [{
                id: 'New York',
                lat: 40.7128,
                lon: -74.0060
            }, {
                id: 'Bay Area',
                lat: 37.7749,
                lon: -122.4194
            }, {
                id: 'Washington D.C.',
                lat: 38.9072,
                lon: -77.0369
            }, {
                id: 'Atlanta',
                lat: 33.7490,
                lon: -84.3880
            }, {
                id: 'Boston',
                lat: 42.3601,
                lon: -71.0589
            }]
        }]
    });

    var harvardPoint = mapHarvard.get('Boston');
    // Add a series of lines for London
    mapHarvard.addSeries({
        name: 'Destinations',
        type: 'mapline',
        lineWidth: 2,
        color: Highcharts.getOptions().colors[3],
        enableMouseTracking: false,
        color: '#BABABA',
        data: [{
            id: '1',
            path: pointsToPath(harvardPoint, mapHarvard.get('Bay Area')),
            lineWidth: 3,
            color: '#000000'
        }, {
            id: '2',
            path: pointsToPath(harvardPoint, mapHarvard.get('Washington D.C.'))
        }, {
            id: '3',
            path: pointsToPath(harvardPoint, mapHarvard.get('Atlanta'))
        }, {
            id: '4',
            path: pointsToPath(harvardPoint, mapHarvard.get('New York'), true),
            lineWidth: 4,
            color: '#000000'
        }]
    });
    return mapHarvard;
}

function locationHarvard() {
    return Highcharts.chart('right-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Metro Area Distribution, Harvard Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['New York', 'Boston', 'Bay Area', 'Washington DC', 'Atlanta', 'Other']
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        var pcnt = (this.y / this.series.data.map(p => p.y).reduce((a, b) => a + b, 0)) * 100;
                        return Highcharts.numberFormat(pcnt) + '%';
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Harvard',
            color: '#A51C30',
            data: [19, 8, 6, 2, 2, 4]
        }]
    });
}

function mapDuke() {
    var mapDuke = Highcharts.mapChart('left-chart', {
        title: {
            text: 'Metro Areas Duke Stats Students Move to'
        },
        legend: {
            align: 'left',
            layout: 'vertical',
            floating: true,
            enabled: false
        },
        mapNavigation: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                return this.point.id;
            }
        },
        plotOptions: {
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[1]
                }
            }
        },
        credits: {
            enabled: true,
            href: 'https://www.yifeihu.me',
            text: 'www.yifeihu.me'
        },
        series: [{
            // Use the gb-all map with no data as a basemap
            mapData: Highcharts.maps['countries/us/us-all'],
            name: 'Basemap',
            borderColor: '#707070',
            nullColor: 'rgba(200, 200, 200, 0.3)',
            showInLegend: false
        }, {
            type: 'mappoint',
            name: 'Metropolitan Areas',
            enableMouseTracking: false,
            dataLabels: {
                format: '{point.id}'
            },
            data: [{
                id: 'Raleigh-Durham',
                lat: 35.9940,
                lon: -78.8986
            }, {
                id: 'New York',
                lat: 40.7128,
                lon: -74.0060
            }, {
                id: 'Bay Area',
                lat: 37.7749,
                lon: -122.4194
            }, {
                id: 'Seattle',
                lat: 47.6062,
                lon: -122.3321
            }, {
                id: 'Washington D.C.',
                lat: 38.9072,
                lon: -77.0369
            }]
        }]
    });

    var dukePoint = mapDuke.get('Raleigh-Durham');
    // Add a series of lines for London
    mapDuke.addSeries({
        name: 'Destinations',
        type: 'mapline',
        lineWidth: 2,
        color: Highcharts.getOptions().colors[3],
        enableMouseTracking: false,
        color: '#BABABA',
        data: [{
            id: '1',
            path: pointsToPath(dukePoint, mapDuke.get('Bay Area')),
            lineWidth: 3,
            color: '#000000'
        }, {
            id: '2',
            path: pointsToPath(dukePoint, mapDuke.get('Washington D.C.'))
        }, {
            id: '3',
            path: pointsToPath(dukePoint, mapDuke.get('Seattle'))
        }, {
            id: '4',
            path: pointsToPath(dukePoint, mapDuke.get('New York'), true),
            lineWidth: 3,
            color: '#000000'
        }]
    });
    return mapDuke;
}

function locationDuke() {
    return Highcharts.chart('right-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Metro Area Distribution, Duke Stats Students Class of 2018'
        },
        xAxis: {
            categories: ['Raleigh-Durham', 'Bay Area', 'New York', 'Washington DC', 'Seattle', 'Other']
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of students',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        var pcnt = (this.y / this.series.data.map(p => p.y).reduce((a, b) => a + b, 0)) * 100;
                        return Highcharts.numberFormat(pcnt) + '%';
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Duke',
            color: '#0736A4',
            data: [4, 4, 3, 2, 2, 4]
        }]
    });
}