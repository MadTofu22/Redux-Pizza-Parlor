import React, {Component} from 'react';
import {connect} from 'react-redux';

class PizzaItem extends Component {

    render () {
        
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(PizzatItem);