import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {

    render () {
        return (
            <div>
                <h1>Pod 5 Pizza</h1>
                <p>Total:</p>
            </div>
        );
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(Header);