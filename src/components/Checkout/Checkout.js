import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    render() {
       
        });
        return (
            <div>
                <h2>Checkout</h2>
             
            </div>
        )
    }
}


    
}












const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Checkout);