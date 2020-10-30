import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component {

    state = {
      adminOrder: []
    };

  getAdminOrderInfo = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then((response) => {
      console.log('this is the get request data' ,response);
      this.setState({
        adminOrder : response.data
      })
      }).catch(function(error){
        console.log(error);
       
    });
    
  }

  componentDidMount = () => {
    this.getAdminOrderInfo();
  }
  render() {
    return (
      <div className="AdminPage">
      <h1> Admin page </h1>
      <table >
          <thead>
              <tr>
                  <th> Name </th>
                  <th> Time Order Placed </th>
                  <th> Type </th>
                  <th> Cost </th>
              </tr>
          </thead>
          <tbody> 
              <tr>
                  <td> {this.state.adminOrder.customer_name} </td>
                  <td> {this.state.adminOrder.time} </td>
                  <td> Type </td>
                  <td> Cost </td>
              </tr>
            </tbody>
      </table>
      </div>
    );
  }
}


export default AdminPage;
