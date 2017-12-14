import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/actions';
import HomeHeader from './header/HomeHeader';
import WeatherNow from './blurb/WeatherNow';
import Table from './table/TableWrapper';
import Chart from './chart/ChartWrapper';
import Calendar from './calendar/Calendar';
import './Home.css';

class Home extends React.Component {

    componentDidMount() {
        const {hasInitialData, fetchCurrentWeather} = this.props;
        if (!hasInitialData) {

            // this fires when no requests have been made. the default location will be Boston
            // further requests will be made from the header when a query is selected
            const bostonLocation = {
                lat: 42.3601,
                lng: 71.0589,
                name: 'Boston',
            }
            fetchCurrentWeather(bostonLocation);
        }
    }

    render() {
        return (
            <div className="Home">
                <HomeHeader /> 
                <div className="HomeTopRow">
                    <WeatherNow />
                    <Calendar />
                </div>
                <Table />
                <Chart />
            </div>
        );
    }
}

// Redux 

const mapStateToProps = state => {
    return {
        hasInitialData: !!state.weather.current,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);