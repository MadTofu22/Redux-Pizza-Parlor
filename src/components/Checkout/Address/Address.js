import React, { Component } from 'react';
import { connect } from 'react-redux';

class Address extends Component {

    render() {
        return (
            <div>
                <ul>
                <li>Vitalin Buterik</li>
                // {this.props.reduxState.orderReducer.customer_name}
                <li>2345 Nice road</li>
                // {this.props.reduxState.orderReducer.street_address}
                <li>Svalsbard</li>
                // {this.props.reduxState.orderReducer.city}
                <li>Iceland</li>
                // {this.props.reduxState.orderReducer.zip}
                </ul>
                <br></br>
                <p> {this.props.reduxState.orderReducer.type} </p>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Address);