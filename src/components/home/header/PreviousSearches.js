import React from 'react';
import { connect } from 'react-redux';
import './PreviousSearches.css';
import { setLocation, fetchCurrentWeather } from '../../../redux/actions';

class PreviousSearches extends React.Component {
    state = {listShowing: true};
    constructList = () => {
        const action = query => () => {
            this.props.fetchCurrentWeather(query)
        }
        return this.props.queries.map((query, idx) => {
            // onClick={action(query)}
            return (
                <li className="HistoryItem" key={idx}>
                    {query.name}
                </li>
            );
        });
    }
    toggleList = () => this.setState({listShowing: (!this.state.listShowing)});

    render() {
        const {queries} = this.props;
        const style = this.state.listShowing ? {display: 'none'} : {display: 'block'};
        return (
            <div className="PreviousSearches">
                <div className="HistoryListWrap">
                    <h2 onClick={this.toggleList}>Previous Searches</h2>
                    <ul className="HistoryList" style={style}>
                        {this.constructList()}
                    </ul>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        queries: state.queries.userQueries || [],
    }
}

const mapDispatchToProps = (dispatch) => ({
    setLocation: (query) => dispatch(setLocation(query)),
    fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviousSearches);
