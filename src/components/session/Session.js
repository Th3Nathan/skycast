import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Error from './Error';
import { SessionButton } from './buttons'; 
import { newUserDisplay, existingUserDisplay } from './displays';
import './Session.css';
import {
    signIn, 
    signUp, 
    updateSessionFormPassword, 
    updateSessionFormUsername
} from '../../redux/actions';

class Session extends React.Component {
    url = this.props.location.pathname;
    getDisplay = () => (
        this.url === '/signup' ? newUserDisplay() : existingUserDisplay()
    )

    handleChange = (e) => {
        const { name } = e.currentTarget;
        const {updateUsername, updatePassword} = this.props;
        if (name === 'username') {
            updateUsername(e.target.value);
        } else {
            updatePassword(e.target.value);
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {signIn, signUp} = this.props;
        this.url === '/signin' ? signIn()  : signUp();
    }

    render() {
        const { errorMsg, loggedIn, username, password, ready } = this.props;
        const { handleSubmit, handleChange, getDisplay } = this;
        return loggedIn ? <Redirect to="/"/> : (
            <div className="Session">
                <div className="SessionHeader">
                    <h2>SkyCast</h2>
                </div>
                <div className="SessionMain">
                    {getDisplay()}
                    <form action="post" onSubmit={handleSubmit}>
                        <div className="SessionMainLabel"><b>Username</b></div>
                        <input 
                            placeholder="Username" 
                            name="username"
                            type="text" 
                            value={username}
                            onChange={handleChange}
                            spellCheck={false}
                        />
                        <div className="SessionMainLabel"><b>Password</b></div>
                        <input 
                            placeholder="Display name" 
                            name="password"
                            type="password" 
                            value={password}
                            onChange={handleChange}
                            spellCheck={false}
                        />
                        <div className="SessionButtonWrap">
                        <div className="SessionError">
                            <Error visable={errorMsg !== ''}>
                                {errorMsg}
                            </Error>
                        </div>
                        <SessionButton enabled={ready} msg="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// Redux 

const mapStateToProps = state => {
    return {
        errorMsg: state.sessionForm.error,
        loggedIn: !!state.session.username, 
        username: state.sessionForm.username,
        password: state.sessionForm.password,
        ready: state.sessionForm.ready,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (data) => {
            const {username, password} = data;
            const user = {username, password };
            return dispatch(signIn(user));
        },
        signUp: (data) => {
            const {username, password} = data;
            const user = {username, password };
            return dispatch(signUp(user));
        },
        updateUsername: (username) => dispatch(updateSessionFormUsername(username)),
        updatePassword: (password) => dispatch(updateSessionFormPassword(password)),
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {...stateProps, ...dispatchProps, ...ownProps,
        signIn: () => {
            const {username, password} = stateProps;
            dispatchProps.signIn({username, password});
        },
        signUp: () => {
            const {username, password} = stateProps;
            dispatchProps.signUp({username, password});
        },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Session);