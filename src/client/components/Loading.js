import React from 'react';
import {connect} from 'react-redux'

const Loading = ({loading}) => (
    <div style={{display: 'none'}} className={`${loading ? 'isLoading' : ''}`}>
        <div className="teal lighten-2">
            <div className="container center-align" style={{padding: '10px 0'}}>
                <span className="white-text">Loading...</span>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);

