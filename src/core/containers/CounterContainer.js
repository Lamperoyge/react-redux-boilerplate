import React from 'react';
import {connect} from 'react-redux';
import Counter from '../../components/Counter';
import {addToCounter} from '../actions/counterAction';

const mapStateToProps = state => {
    return {
        counter: state.counter.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testCounter : (payload) => {
            dispatch(addToCounter(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
