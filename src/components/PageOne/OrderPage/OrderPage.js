import React, {Component} from 'react';
import {connect} from 'react-redux';

class OrderPage extends Component {

    render () {
        return (
            <div>
                Test
            </div>
        );
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(OrderPage);