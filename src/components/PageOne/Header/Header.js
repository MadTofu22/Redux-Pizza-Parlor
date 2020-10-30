import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {

    render () {
        return 
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(Header);