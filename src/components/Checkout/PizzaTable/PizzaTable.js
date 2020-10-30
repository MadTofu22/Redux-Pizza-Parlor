import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                        <tr>
                            {/* <td>.name</td> */}
                            {/* <td>.cost</td> */}
                        </tr>
                    </tbody>
                </table>
                {/* <p>.total</p> */}

            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(PizzaTable);