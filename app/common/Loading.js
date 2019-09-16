import React from "react";
import { connect } from 'react-redux';
import './css/loading.css';

class Loading extends React.Component {
    render () {
        const { isFetching } = this.props;
        
        return (
            isFetching ? 
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            : ''
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return state.appReducer;
}
export default connect(mapStateToProps)(Loading);