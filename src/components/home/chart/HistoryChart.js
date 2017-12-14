// import json from '../../weather.js';
import { Chart } from 'react-google-charts';
import React from 'react';
import moment from 'moment';

class HistoryChart extends React.Component {
    getData = () => {
        if (this.props.type === 'temperature') {
            return [['Day', 'Low', 'High'], ...this.temperatureRows()];
        } else {
            return [['Day', 'Humidity'], ...this.humidityRows()];
        }
    }
    
    temperatureRows = () => {
        const {daily} = this.props;
        return daily.map(day => {
            let date = moment(day.time, 'X').format('MM/DD');
            let low = day.temperatureLow;
            let high = day.temperatureHigh;
            return [date, low, high];
        });
    }

    humidityRows = () => {
        const {daily} = this.props;
        return daily.map(day => {
            let date = moment(day.time, 'X').format('MM/DD');
            let humidity = day.humidity;
            return [date, humidity];  
        });
    }
    getOptions = () => {
        const defaultOptions = {
            backgroundColor: '#EDEDED',
            curveType: 'function',
            legend: { position: 'bottom' },   
        }
        if (this.props.type === 'temperature') {
            return {
                ...defaultOptions,
                title: 'Daily High and Low Temperature'
            }
        } else {
            return {
                ...defaultOptions,
                title: 'Daily Humidity'
            }
        }
    }

    render() {
        return (
            <Chart
                chartType="LineChart"
                data={this.getData()}
                options={this.getOptions()}
                graph_id="LineChart"
                width="780px"
                height="300px"
                legend_toggle
            />
        );
    }
}

export default HistoryChart;