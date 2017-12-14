import React from 'react';
import { connect } from 'react-redux'
import HistoryChart from './HistoryChart'
import './ChartWrapper.css';

class ChartWrapper extends React.Component {
    state = {type: 'temperature'}

    setType = (type) => () => this.setState({type});  

    getStyle = (value) => {
        const {type} = this.state;
        if (value === type) {
            return {background: '#1D4E89'};
        } else {
            return {};
        }
    } 
    
    render() {
        if (this.props.daily.length === 0) return null;
        const {type} = this.state;
        const {getStyle, setType} = this;
        const {daily} = this.props;
        return  (
            <div className="ChartWrapper">
                <HistoryChart
                    daily={daily}
                    type={type}
                />
                <div className="ChartButtons">
                    <div className="ChartWrapperType">
                        <div 
                            style={getStyle('temperature')} 
                            onClick={setType('temperature')} 
                            className="ChartToggle"
                        >
                            Temperature 
                        </div>
                        <div 
                            style={getStyle('humidity')} 
                            onClick={setType('humidity')} 
                            className="ChartToggle"
                        >
                            Humidity
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        daily: state.weather.daily,
    }
}

export default connect(mapStateToProps, null)(ChartWrapper);