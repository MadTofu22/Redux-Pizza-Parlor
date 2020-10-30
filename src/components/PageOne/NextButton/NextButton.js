import React, {Component} from 'react';
import {connect} from 'react-redux';



class NextButton extends Component {

    render () {
        
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(NextButton);