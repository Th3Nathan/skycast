import React from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';

export const title = (type) => ({time, icon}) => {
    let formatIcon = icon.toUpperCase().split('-').join('_');
    let now = moment(time, 'X');
    let timeDisplay;
    let day;
    if (type === 'hourly') {
        timeDisplay = now.format('h a').toUpperCase();  
        day = now.format('dddd').slice(0, 3).toUpperCase();  
    } else {
        timeDisplay = now.format('dddd').slice(0, 3).toUpperCase(); 
        day = now.format('MM/DD').toUpperCase();
    }
    return (
      <div style={{
          display: 'flex',
          position: 'relative',
          width: '100px',
          justifyContent: 'space-between'}}>
        <div style={{margin: '-8px 0px 0px -20px'}}>
          <b>{timeDisplay}</b>
          <div style={{opacity: '0.7'}}>
            {day}
          </div>
        </div>
        <div style={{
            width: '50%',
            right: '-20px',
            top: '8px',
            position: 'absolute',
            padding: '0px',
        }}> 
            <Skycons 
                color='grey' 
                icon={formatIcon} 
                autoplay={true}
            />
        </div>
      </div>
    )
}

export const description = ({summary}) => {
    return (
        <div style={{
            minWidth: '80px',
            fontSize: '16px',
            color: '#393939'
            }}
        >
            {summary}
        </div>
    )
}

export const temperature = ({temperature}, style) => {
    return (
        <div>
            <b>{temperature}</b>
            <span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}

export const feels = ({apparentTemperature}, style) => {
    return (
        <div style={{color: '#999'}}
            >
            <b>{apparentTemperature}</b>
            <span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}

export const precipitation = ({precipProbability}) => {
    return (
        <div>
            {parseInt(precipProbability, 10) * 100}%
        </div>
    );
}

export const humidity = ({humidity}) => {
    return (
        <div>
            {parseInt(humidity * 100, 10)}%
        </div>
    );
}

const getDir = (bearing) => {
    if (bearing > 338 || bearing < 23) {
        return 'N';
    } else if (bearing < 68) {
        return 'NE';
    } else if (bearing < 113) {
        return 'E';
    } else if (bearing < 188) {
        return 'SE';
    } else if (bearing < 203) {
        return 'S';
    } else if (bearing < 248) {
        return 'SW';
    } else if (bearing < 293) {
        return 'W';
    } else {
        return 'NW';
    }
}

export const wind = ({windSpeed, windBearing}) => {
    return (
        <div>
            {Math.floor(windSpeed)} mph {getDir(windBearing)} 
        </div>
    )
}

export const highLow = ({temperatureHigh, temperatureLow}) => {
    return (
        <div>
            <b>{temperatureHigh}</b>
            <span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                /> 
            </span>
            &nbsp;/
            <b> {temperatureLow}</b>
            <span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}
