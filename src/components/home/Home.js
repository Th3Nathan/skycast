import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css';
import HomeHeader from './header/HomeHeader';
import Skycons from 'react-skycons';
import WeatherNow from './WeatherNow';
import CreateTable from './CreateTable';

class Home extends React.Component {
    state = {
        tableType: 'hourly'
    }

    setTableType = (type) => () => this.setState({tableType: type});
    getStyle = (type) => this.state.tableType === type ? {border: '1px solid black'} : {};
    render() {
        const { loggedIn, username, queries } = this.props;
        const { tableType } = this.state;
        const { setTableType, getStyle } = this;
        return (
            <div className="Home">
                <HomeHeader />
                <WeatherNow />
                <div className="HomeToggleTableButtonWrap">
                    <div 
                        style={getStyle('hourly')} 
                        onClick={setTableType('hourly')} 
                        className="HomeToggleTable"
                        >
                        Hourly 
                    </div>
                    <div 
                        style={getStyle('daily')} 
                        onClick={setTableType('daily')} 
                        className="HomeToggleTable"
                        >
                        Daily
                    </div>
                </div>
                <CreateTable type={tableType} />
                <h1>Current Location is {this.props.location.name}</h1>
                <h1>With lat and long of {this.props.location.latitude} {this.props.location.longitude}</h1>
            </div>
        );
    }
}

// // Redux 

const mapStateToProps = state => {
    return {
        loggedIn: !!state.session.username, 
        username: state.sessionForm.username,
        queries: state.queries.userQueries || [],
        location: state.home.location,
    }
}

export default connect(mapStateToProps,)(Home);