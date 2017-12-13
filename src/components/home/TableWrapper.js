import React from 'react';
import { connect } from 'react-redux';
import CreateTable from './CreateTable';
import './TableWrapper.css';
class TableWrapper extends React.Component {
    state = {tableType: 'hourly'}
    setTableType = (type) => () => this.setState({tableType: type});
    getStyle = (type) => this.state.tableType === type ? {border: '1px solid black'} : {};

    render() {
        if (this.props.daily.length === 0) return null;
        const { tableType } = this.state;
        const { daily, hourly } = this.props;
        const { setTableType, getStyle } = this;
        return (
            <div className="TableWrapper">
                <div className="TableButtons">
                    <div className="ToggleTableButtonWrap">
                    <div 
                        style={getStyle('hourly')} 
                        onClick={setTableType('hourly')} 
                        className="ToggleTable"
                    >
                        Hourly 
                    </div>
                    <div 
                        style={getStyle('daily')} 
                        onClick={setTableType('daily')} 
                        className="ToggleTable"
                    >
                        Daily
                    </div>
                    </div>
                </div>
                <CreateTable
                    hourly={hourly}
                    daily={daily}
                    type={tableType}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        daily: state.weather.daily,
        hourly: state.weather.hourly,
    }
}


export default connect(mapStateToProps, null)(TableWrapper);