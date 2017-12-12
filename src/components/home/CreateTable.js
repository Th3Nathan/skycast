import React from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';
import json from '../../weather.js';
import {
    time,
    description,
    temperature,
    feels,
    precipitation,
    humidity,
    wind,
    day,
    highLow
} from './TableFormats';
import './CreateTable.css';

// this will take two props, fields is an array of objects with names of types, 
// with this will need to create an array of functions that can map over data row 
// and format them for ins rton. 

// the next is data, which is an array of flat old values from the json

// the componenet creates rows, which are flexed divs, and inserts each functioned datum into them 
// the width of a particular component doesnt really matter, but every row of a type should have same max width


class CreateTable extends React.Component {
    hourly = [
        {func: time, field: 'Time'}, 
        {func: description, field: 'Description'}, 
        {func: temperature, field: 'Temp'}, 
        {func: feels, field: 'Feels'}, 
        {func: precipitation, field: 'Precip'},
        {func: humidity, field: 'Humidity'}, 
        {func: wind, field: 'Wind'},
    ];
    daily = [
        {func: day, field: 'Day'}, 
        {func: description, field: 'Description'}, 
        {func: highLow, field: 'High/Low'}, 
        {func: precipitation, field: 'Precip'},    
        {func: wind, field: 'Wind'},
        {func: humidity, field: 'Humidity'}, 
    ];
    fiveDays = json.daily.data.slice(0, 5);
    twentyFourHours = json.hourly.data.slice(0, 10);
    
    construct = () => {
        let format = this.props.type === 'hourly' ? this.hourly : this.daily;
        let data = this.props.type === 'hourly' ? this.twentyFourHours : this.fiveDays;
        let header = (
            <tr>
                {format.map((colFormat, i) => 
                    <th key={i}>{colFormat.field}</th>
                )}
            </tr>
        )
        let rows = data.map((dataRow, i) => {
            return ( <tr key={i}>
                {format.map((colFormat, j) => {
                    return (
                        <td key={j}>
                            {colFormat.func(dataRow, j)}
                        </td>
                    )
                })}
            </tr>
            )
        })
        return (
            <table>
                <thead>
                    {header}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )     
    }
    render() {
        return (
            <div>
                {this.construct()}
            </div>
        )
    }
}

export default CreateTable;