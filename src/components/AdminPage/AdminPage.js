import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component {
  render() {
    return (
      <div className="AdminPage">
      <h1> Admin page </h1>
      <table>
          <head>
              <td>
                  <th>
                    <tr>Admin</tr>
                  </th>
              </td>
          </head>
      </table>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState 
    });
export default connect(putReduxStateOnProps)(AdminPage);
