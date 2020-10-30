import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

class CustInfoForm extends Component {

    state = {
        custInfo: {
            name: event.target.value?,
            streetAddress:
            city:
            zip: 
            type: Boolean?
        }
    }

    addCustInfo = () => {
        console.log("customer info form")
        //should capture an object and including info from 1st order page and route to checkout page/component
        this.props.dispatch({type: 'ADD_CUST_INFO', payload: this.state.custInfo})
        //orderReducer customerInfoReducer
    }

    submitCustInfo = () => {
        console.log("clicked",)
        //should route to order checkout page/component
        this.props.dispatch({type: 'SUBMIT_CUST_INFO'})
        //POST request here
    }

    handleChange = (event) => {
        this.setState({
            
          inputValue: event.target.value
        });
    }
      //do this for all input values to bundle the info as 1 object
    //Do I need this here? or is this handled by the addCustInfo function? Use for updating total in header and call in submit function

    render(){
        return (
            //should I import the header component here? Also, do I need to/how do I add the total in the shared header
            <div className="CustInfoForm">
                <heading>Step 2: Customer Information</heading>

                <input onChange={this.addCustInfo} placeholder="Name"></input>
                <input onChange={this.addCustInfo} placeholder="Street Address"></input>
                <input onChange={this.addCustInfo} placeholder="City"></input>
                <input onChange={this.addCustInfo} placeholder="Zip"></input>
                {/* Do I need more than one addInfo type function here or can they all be captured on a single click event? */}
                {/* CSS should be left-aligned under each other and heading */}

                <input type="radio" id="pickup"></input>
                <label for="pickup">Pickup</label>
                <br></br>
                <input type="radio" id="delivery"></input>
                <label for="delivery">Delivery</label>
                {/* CSS should float in the middle paralell to name and st ad inputs */}

                <button onClick={this.submitCustInfo}>NEXT</button>
                {/* CSS should right float in the bottom right corner. Next button */}
            </div>
        )
    }

}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
export default connect(putReduxStateOnProps)(CustInfoForm);