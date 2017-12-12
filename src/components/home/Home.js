import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css';
import HomeHeader from './header/HomeHeader';
import Skycons from 'react-skycons';
import WeatherNow from './WeatherNow';
import CreateTable from './CreateTable';

class Home extends React.Component {

    render() {
        const { loggedIn, username, queries } = this.props;
        return (
            <div className="Home">
                <HomeHeader queries={queries} />
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <WeatherNow />
                <CreateTable type={'hourlyy'} />
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

// const mapDispatchToProps = dispatch => {
//     return {
//         signIn: (data) => {
//             const {username, password} = data;
//             const user = {username, password };
//             return dispatch(signIn(user));
//         },
//         signUp: (data) => {
//             const {username, password} = data;
//             const user = {username, password };
//             return dispatch(signUp(user));
//         },
//         updateUsername: (username) => dispatch(updateSessionFormUsername(username)),
//         updatePassword: (password) => dispatch(updateSessionFormPassword(password)),
//     }
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     return {...stateProps, ...dispatchProps, ...ownProps,
//         signIn: () => {
//             const {username, password} = stateProps;
//             dispatchProps.signIn({username, password});
//         },
//         signUp: () => {
//             const {username, password} = stateProps;
//             dispatchProps.signUp({username, password});
//         },
//     }
//   }

export default connect(mapStateToProps,)(Home);