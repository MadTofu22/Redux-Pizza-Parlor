import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from '../Address/Address';
import PizzaTable from '../PizzaTable/PizzaTable';
import CheckoutButton from '../CheckoutButton/CheckoutButton';

class Checkout extends Component {

    render() {
       //TODO: header 
        return (
            <div>
                <h2>'Step 3: Checkout'</h2>
                <Address/>
                <PizzaTable/>
                <CheckoutButton/>
            </div>
        )
    }
}






const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Checkout);