import React, {Component} from 'react';
import { connect } from 'react-redux';
//import './App.css';

class CustInfoForm extends Component {

    render(){
        return (
            <div className="CustInfoForm">
                <heading>Step: 2 Customer Information</heading>

                <input onChange={this.XXXX}> </input>
                <input onChange={this.XXXX}> </input>
                <input onChange={this.XXXX}> </input>
                <input onChange={this.XXXX}> </input>

                <input type="radio" id="pickup"></input>
                <label for="pickup" 

                <button onClick={this.handleClick}> </button>
            </div>
        )
    }

}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
export default connect(putReduxStateOnProps)(CustInfoForm);