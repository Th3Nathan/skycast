import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/actions';
import HomeHeader from './header/HomeHeader';
import WeatherNow from './WeatherNow';
import Table from './TableWrapper';
import Chart from './ChartWrapper';
import './Home.css';
class Home extends React.Component {

    componentDidMount() {
        const {hasInitialData, fetchCurrentWeather} = this.props;
        if (!hasInitialData) {

            // this fires when no requests have been made. the default location will be Boston
            // further requests will be made from the header when a query is selected
            let bostonLocation = {
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
                <WeatherNow />
                <Table />
                <Chart />
                {/* <h1>Current Location is {this.props.location.name}</h1>
                <h1>With lat and long of {this.props.location.latitude} {this.props.location.longitude}</h1> */}
            </div>
        );
    }
}

// // Redux 

const mapStateToProps = state => {
    return {
        hasInitialData: !!state.weather.current,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);