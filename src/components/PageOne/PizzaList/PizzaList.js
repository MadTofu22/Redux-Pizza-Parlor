import React, {Component} from 'react';
import {connect} from 'react-redux';

class PizzaList extends Component {

    render () {
        
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(PizzaList);