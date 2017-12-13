import React from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';

export const time = (data) => {
    let stamp = data.time;
    let icon = data.icon;
    let formatIcon = icon.toUpperCase().split('-').join('_');
    let now = moment(stamp, 'X');
    let time = now.format('h a').toUpperCase();  
    let day = now.format('dddd').slice(0, 3).toUpperCase(); 
    return (
      <div style={{
          display: 'flex',
          position: 'relative',
          width: '100px',
          justifyContent: 'space-between'}}>
        <div style={{
            margin: '-8px 0px 0px -20px',

        }}>
          <b>{time}</b>
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



export const description = (data) => {
    let description = data.summary;
    return (
        <div style={{
            minWidth: '80px',
            fontSize: '16px',
            color: '#393939'
            }}
            >
           {description}
       
        </div>
    )
}

export const temperature = (data, style) => {
    let temp = data.temperature;
    return (
        <div style={{
            ...style,
            }}
            >
            <b>{temp}</b><span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
                </span>
        </div>
    )
}

export const feels = (data, style) => {
    let temp = data.apparentTemperature;
    return (
        <div style={{
            color: '#999',
            }}
            >
            <b>{temp}</b><span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
                </span>
        </div>
    )
}

export const precipitation = (data) => {
    let percent = data.precipProbability;
    return (
        <div>
            {parseInt(percent) * 100}%
        </div>
    );
}

export const humidity = (data) => {
    let percent = data.humidity;
    return (
        <div>
            {parseInt(percent * 100)}%
        </div>
    );
}

export const wind = (data) => {
    let speed = data.windSpeed;
    let bearing = data.windBearing;
    let getDir = (bearing) => {
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
    return (
        <div>
            {Math.floor(speed)} mph {getDir(bearing)} 
        </div>
    )
}
export const day = (data) => {
    let stamp = data.time;
    let icon = data.icon;
    let formatIcon = icon.toUpperCase().split('-').join('_');
    let now = moment(stamp, 'X');
    let time = now.format('dddd').slice(0, 3).toUpperCase(); 
    let day = now.format('MM/DD').toUpperCase();
    return (
      <div style={{
          display: 'flex',
          position: 'relative',
          width: '100px',
          justifyContent: 'space-between'}}>
        <div style={{
            margin: '-8px 0px 0px -20px',

        }}>
          <b>{time}</b>
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

export const highLow = (data) => {
    let high = data.temperatureHigh;
    let low = data.temperatureLow;
    return (
        <div>
            <b>{high}</b><span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                /> </span>
            /
            <b> {low}</b><span><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
                </span>
        </div>
    )
}
