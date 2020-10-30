import React, {Component} from 'react';
import { connect } from 'react-redux';
//import './App.css';
import axios from 'axios';

class CustInfoForm extends Component {

    // componentDidMount = () => {
    //     //function call here?
    // }

    state = {
        custInfo: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: true
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
        axios.post('/custInfo', this.state.custInfo).then ((response) => {
            //should this link be custInfo? or order? or something else?
            console.log(response.data);
            //this.props.getBooks();
      
          }).catch((error) => {
            console.log(error);
          });
    }

    handleChange = (event) => {
        //event.preventDefault();
        this.setState({
            custInfo: event.target.value
        });
        //do I need to add a key/value pair here for the updated total?
    }
    // Use for updating total in header and call in submit function

    render(){
        return (
            //should I import the header component here? Also, do I need to/how do I add the total in the shared header
            <div className="CustInfoForm">
                <h3>Step 2: Customer Information</h3>
                <br></br>
                <input onChange={this.addCustInfo} placeholder="Name"></input>
                <input onChange={this.addCustInfo} placeholder="Street Address"></input>
                <input onChange={this.addCustInfo} placeholder="City"></input>
                <input onChange={this.addCustInfo} placeholder="Zip"></input>
                {/* Do I need more than one addInfo type function here or can they all be captured on a single click event? */}
                {/* CSS should be left-aligned under each other and heading */}
                <br></br>
                <input value={this.state.custInfo.type} type="radio" id="pickup"></input>
                <label htmlFor="pickup">Pickup</label>
                <br></br>
                <input value={this.state.custInfo.type} type="radio" id="delivery"></input>
                <label htmlFor="delivery">Delivery</label>
                {/* CSS should float in the middle paralell to name and st ad inputs */}
                <br></br>
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