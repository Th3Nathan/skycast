import React from 'react';
import { connect } from 'react-redux';
import './PreviousSearches.css';
import HistoryModal from './HistoryModal';

class PreviousSearches extends React.Component {
    state = {modal: false}

    closeModal = () => this.setState({modal: false});
    openModal = () => this.setState({modal: true});
    render() {

        const {queries} = this.props;
        return (
            <div className="PreviousSearches">
                <HistoryModal isOpen={this.state.modal} close={this.closeModal}/>
                <div className="PreviousSearchesTrigger" onClick={this.openModal}>My Searches</div>
            </div>
        );
    }
}

export default PreviousSearches;