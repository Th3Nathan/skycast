import React from 'react';
import json from '../../weather.js';
import {
    title,
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


class CreateTable extends React.Component {
    hourly = [
        {func: title('hourly'), field: 'Time'}, 
        {func: description, field: 'Description'}, 
        {func: temperature, field: 'Temp'}, 
        {func: feels, field: 'Feels'}, 
        {func: precipitation, field: 'Precip'},
        {func: humidity, field: 'Humidity'}, 
        {func: wind, field: 'Wind'},
    ];
    daily = [
        {func: title('daily'), field: 'Day'}, 
        {func: description, field: 'Description'}, 
        {func: highLow, field: 'High/Low'}, 
        {func: precipitation, field: 'Precip'},    
        {func: wind, field: 'Wind'},
        {func: humidity, field: 'Humidity'}, 
    ];
    daysData = json.daily.data.slice(0, 12);
    hoursData = json.hourly.data.slice(0, 12);
    
    construct = () => {
        let format = this.props.type === 'hourly' ? this.hourly : this.daily;
        let data = this.props.type === 'hourly' ? this.hoursData : this.daysData;
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