import * as React from 'react';
import ReactModal from 'react-modal';
import './HistoryModal.css';
import {setLocation} from '../../redux/actions';
import { connect } from 'react-redux';

class HistoryModal extends React.Component {
    modalStyle = {
        'borderRadius': '12px',
        'width': '260px',
        'padding': '17px 0px',
        'border': '1px solid rgba(0,0,0,.15)',
    };

    overlayStyle = {
        'background': 'rgba(0, 0, 0, 0.3)'
    }

    constructList = () => {
        const action = query => () => {
            this.props.close();
            this.props.setLocation(query)
        }
        return this.props.queries.map((query, idx) => {
            return (
                <li onClick={action(query)} key={idx}>
                    {query.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
                style={{ overlay: this.overlayStyle, content: this.modalStyle }}
                contentLabel="Example Modal"
                overlayClassName="ReactModal__Overlay"
                className="ReactModal__Content"
                bodyOpenClassName="ReactModal__Body--open"
                shouldCloseOnOverlayClick={true}
                parentSelector={() => document.body}
                ariaHideApp={false}
            >
                <h2>Previous Searches</h2>
                <ul className="HistoryModal-options">
                    {this.constructList()}
                </ul>
            </ReactModal>
    );
    }
}

// REDUX 

// import { StoreState } from '../../redux/types/index';
// import { HistoryModalActions } from '../../redux/actions/index';

const mapStateToProps = state => {
    return {
        queries: state.queries.userQueries || [],
    }
}

const mapDispatchToProps = (dispatch) => ({
    setLocation: (query) => dispatch(setLocation(query))
});



export default connect(mapStateToProps, mapDispatchToProps)(HistoryModal);
