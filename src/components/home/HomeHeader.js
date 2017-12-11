import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './HomeHeader.css';
import Autocomplete from './Autocomplete';
import PreviousSearches from './PreviousSearches';
import HeaderAuth from './HeaderAuth';

class HomeHeader extends React.Component {
    authBox = () => {
        if (this.props.loggedIn) {
            return (
                <div className="HomeHeaderAuth">
                    <div>Sign Out</div>
                </div>
            );
        } else {
            return (
                <div className="HomeHeaderAuth">
                    <div>Sign Up</div>
                    <div>Sign In</div>
                </div>
            );
        }
    }
    render() {
        const { loggedIn, username } = {
            loggedIn: false,
            username: 'th3nathan',
        };
        const {queries} = this.props;
        return (
            <div className="HomeHeader">
                <div className="HomeHeaderContent">
                    <div className="HomeHeaderLeft">
                        <div className="HomeHeaderTitleBox">
                            <h1 className="HomeHeaderTitle">SkyCast</h1>
                        </div>
                        <Autocomplete />
                        <PreviousSearches searches={queries} />
                    </div>
                    <HeaderAuth />
                </div>
            
            </div>
        );
    }
}

export default HomeHeader;