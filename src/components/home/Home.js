import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { SessionButton } from './buttons'; 
import './Home.css';
// import {
//     signIn, 
//     signUp, 
//     updateSessionFormPassword, 
//     updateSessionFormUsername
// } from '../../redux/actions';
import Autocomplete from './AutocompleteForm';
class Home extends React.Component {
    url = this.props.location.pathname;

    render() {
        const { loggedIn, username, queries } = this.props;
        return (
            <div className="Home">
                <Autocomplete />
                <h2>Hello {username}</h2>
                {queries.map((q, i) => {
                    return (
                        <div>{q.name}</div>
                    );
                })}    
            
            </div>
        );
    }
}

// // Redux 

const mapStateToProps = state => {
    debugger
    return {
        loggedIn: !!state.session.username, 
        username: state.sessionForm.username,
        queries: state.queries.userQueries || [],
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