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
          padding: '7px 15px',
          minWidth: '115px',
          fontSize: '14px',
          position: 'relative',
          justifyContent: 'space-between'}}>
        <div>
          <b>{time}</b>
          <div style={{opacity: '0.7'}}>
            {day}
          </div>
        </div>
        <div style={{
            width: '59%',
            right: '-20px',
            top: '0px',
            position: 'absolute'
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
            padding: '7px 15px',
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
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
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
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
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
        <div style={{
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
            }}
            >
            {parseInt(percent) * 100}%
        </div>
    );
}

export const humidity = (data) => {
    let percent = data.humidity;
    return (
        <div style={{
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
            }}
            >
            {parseInt(percent) * 100}%
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
        <div style={{
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
            }}
            >
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
          padding: '7px 15px',
          maxWidth: '125px',
          fontSize: '14px',
          position: 'relative',
          justifyContent: 'space-between'}}>
        <div>
          <b>{time}</b>
          <div style={{opacity: '0.7'}}>
            {day}
          </div>
        </div>
        <div style={{
            width: '5%',
            right: '-20px',
            top: '0px',
            position: 'absolute'
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
        <div style={{
            padding: '7px 15px',
            maxWidth: '125px',
            fontSize: '14px',
            }}
            >
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
