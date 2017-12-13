import React from 'react';
import moment from 'moment';
import Skycons from 'react-skycons';
import { connect } from 'react-redux';
import json from '../../weather.js';
import './WeatherNow.css';
class WeatherNow extends React.Component {

    mapHoursToBackground = (hours) => {
        const colors = ['#81b4e4', '#5FA0DD', '#1b4e7e', '#091a2a'];
        if (hours >= 22 || hours <= 3) {
            return {background: colors[3]};
        } else if (hours >= 19 || hours <= 6) {
            return {background: colors[2]};
        } else if (hours >= 16 || hours <= 9) {
            return {background: colors[1]};
        } else {
            return {background: colors[0]};
        }
    }

    formatIconName = (name) => {
        return name.toUpperCase().replace('-', '_');
    }

    // render() {
    //     // if (!this.props.json) return null;
    //     // let json = this.props.json;
    //     if (!this.props.current) return null;
    //     const {current, name, daily} = this.props;
    //     let now = moment(current.time, 'X');
    //     let timeBackgroundStyle = this.mapHoursToBackground(parseInt(now.format('HH'), 10));
    //     let datestring = "as of " + now.format('h:mm:ss a');
        
    //     return (
    //         <div className="WeatherNow">
    //             <div style={timeBackgroundStyle} className="WeatherNowBox">
    //                 <div className="WeatherNowHeader">
    //                     <h2 className="WeatherNowHeaderPlace">{name}</h2>
    //                     <h2 className="WeatherNowHeaderTime">{datestring}</h2>
    //                 </div>
    //                 <div className="WeatherNowTempIcon">
    //                     <div className="WeatherNowTempDesc">
    //                         <div>
    //                             {Math.floor(current.temperature)}
    //                             <span><i className="fa fa-circle-o" aria-hidden="true"></i></span>
    //                         </div>
    //                         <div className="WeatherNowDesc">
    //                             {(current.summary).toUpperCase()}
    //                         </div>
    //                     </div>
    //                     <div className="WeatherNowIcon">
    //                     <Skycons 
    //                         color='white' 
    //                         icon={this.formatIconName(this.formatIconName(current.icon))} 
    //                         autoplay={true}
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="WeatherNowBoxStats">
    //                     <h4>Daily High: <b>{daily.temperatureHigh}</b><span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span></h4>
    //                     <h4>Daily Low: <b>{daily.temperatureLow}</b><span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span></h4>
    //                     <h4>UV Index: {current.uvIndex}</h4>
    //                 </div>
    //             </div>
    //             <div className="WeatherNowStats">
    //                 <div className="WeatherNowStatsHeader">
    //                     RIGHT NOW
    //                 </div>
    //                 <div className="WeatherNowStatsItem">
    //                     <div className="WeatherNowStatsItemTitle">
    //                         Precipitation
    //                     </div>
    //                     <div className="WeatherNowStatsItemData">
    //                         {current.precipProbability}%
    //                     </div>
    //                 </div>
    //                 <div className="WeatherNowStatsItem">
    //                     <div className="WeatherNowStatsItemTitle">
    //                         Wind Speed
    //                     </div>
    //                     <div className="WeatherNowStatsItemData">
    //                         {current.windSpeed} mph
    //                     </div>
    //                 </div>
    //                 <div className="WeatherNowStatsItem">
    //                     <div className="WeatherNowStatsItemTitle">
    //                         Humidity
    //                     </div>
    //                     <div className="WeatherNowStatsItemData">
    //                         {Math.floor(current.humidity * 100)}%
    //                     </div>
    //                 </div>
    //                 <div className="WeatherNowStatsItem">
    //                     <div className="WeatherNowStatsItemTitle">
    //                         Feels Like
    //                     </div>
    //                     <div className="WeatherNowStatsItemData">
    //                         {current.apparentTemperature}<span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span>
    //                     </div>
    //                 </div>
    //                 <div className="WeatherNowStatsItem">
    //                     <div className="WeatherNowStatsItemTitle">
    //                         Pressure
    //                     </div>
    //                     <div className="WeatherNowStatsItemData">
    //                         {current.pressure}
    //                     </div>
    //                 </div>
    //             </div>
                    
    //         </div>
    //     )
    // }

    render() {
        // if (!this.props.json) return null;
        // let json = this.props.json;
      
        // const {current, name, daily} = this.props
        const current = json.currently;
        const name = "Boston";
        const daily = {temperatureHigh: 90, temperatureLow: 41};
        let now = moment(current.time, 'X');
        let timeBackgroundStyle = this.mapHoursToBackground(parseInt(now.format('HH'), 10));
        let datestring = "as of " + now.format('h:mm:ss a');
        
        return (
            <div className="WeatherNow">
                <div style={timeBackgroundStyle} className="WeatherNowBox">
                    <div className="WeatherNowHeader">
                        <h2 className="WeatherNowHeaderPlace">{name}</h2>
                        <h2 className="WeatherNowHeaderTime">{datestring}</h2>
                    </div>
                    <div className="WeatherNowTempIcon">
                        <div className="WeatherNowTempDesc">
                            <div>
                                {Math.floor(current.temperature)}
                                <span><i className="fa fa-circle-o" aria-hidden="true"></i></span>
                            </div>
                            <div className="WeatherNowDesc">
                                {(current.summary).toUpperCase()}
                            </div>
                        </div>
                        <div className="WeatherNowIcon">
                        <Skycons 
                            color='white' 
                            icon={this.formatIconName(this.formatIconName(current.icon))} 
                            autoplay={true}
                            />
                        </div>
                    </div>
                    <div className="WeatherNowBoxStats">
                        <h4>Daily High: <b>{daily.temperatureHigh}</b><span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span></h4>
                        <h4>Daily Low: <b>{daily.temperatureLow}</b><span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span></h4>
                        <h4>UV Index: {current.uvIndex}</h4>
                    </div>
                </div>
                <div className="WeatherNowStats">
                    <div className="WeatherNowStatsHeader">
                        RIGHT NOW
                    </div>
                    <div className="WeatherNowStatsItem">
                        <div className="WeatherNowStatsItemTitle">
                            Precipitation
                        </div>
                        <div className="WeatherNowStatsItemData">
                            {current.precipProbability}%
                        </div>
                    </div>
                    <div className="WeatherNowStatsItem">
                        <div className="WeatherNowStatsItemTitle">
                            Wind Speed
                        </div>
                        <div className="WeatherNowStatsItemData">
                            {current.windSpeed} mph
                        </div>
                    </div>
                    <div className="WeatherNowStatsItem">
                        <div className="WeatherNowStatsItemTitle">
                            Humidity
                        </div>
                        <div className="WeatherNowStatsItemData">
                            {Math.floor(current.humidity * 100)}%
                        </div>
                    </div>
                    <div className="WeatherNowStatsItem">
                        <div className="WeatherNowStatsItemTitle">
                            Feels Like
                        </div>
                        <div className="WeatherNowStatsItemData">
                            {current.apparentTemperature}<span><i className="WeatherNowBoxStatsI fa fa-circle-o" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div className="WeatherNowStatsItem">
                        <div className="WeatherNowStatsItemTitle">
                            Pressure
                        </div>
                        <div className="WeatherNowStatsItemData">
                            {current.pressure}
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        current: state.weather.current,
        daily: state.weather.daily[0],
        name: state.weather.location.name,
    }
}


export default connect(mapStateToProps, null)(WeatherNow);
