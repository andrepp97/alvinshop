import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Dashboard extends Component {
    state = {

    }

    // CREATE CHART
    createChart1 = () => {
        let chart = am4core.create("chart1", am4charts.PieChart);

        chart.data = [
            {
                "country": "Lithuania",
                "litres": 501.9
            }, {
                "country": "Czech Republic",
                "litres": 301.9
            }, {
                "country": "Ireland",
                "litres": 201.1
            }, {
                "country": "Germany",
                "litres": 165.8
            }, {
                "country": "Australia",
                "litres": 139.9
            }, {
                "country": "Austria",
                "litres": 128.3
            }, {
                "country": "UK",
                "litres": 99
            }, {
                "country": "Belgium",
                "litres": 60
            }
        ]

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

        this.chart = chart;
    }

    // LIFECYCLE
    componentDidMount() {
        this.createChart1()
        document.title = "ALVIN SHOP | Dashboard"
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    // LIFECYCLE


    // MAIN RENDER
    render() {
        return (
            <div className="container-fluid">

                <h2 className="h2-responsive mb-4">Dashboard</h2>

                <div className="row">
                    <div className="col-xl-7">
                        <div className="card p-3">
                            <div id="chart1" style={{ height:'175px' }} />
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="card p-3">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet laudantium aut, minus magni, provident ab debitis ea eius unde repudiandae illo dolores recusandae perspiciatis sequi in dolorem nam voluptatibus?
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;