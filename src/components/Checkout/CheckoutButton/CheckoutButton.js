import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutButton extends Component {

    render() {
        return (
            <div>
                //information to database 
                //confirmation alert for order 
                //route user back to homepage
            </div>
        );
    };
};

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(CheckoutButton);