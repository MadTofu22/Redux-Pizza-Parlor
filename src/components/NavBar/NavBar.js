import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import OrderPage from '../PageOne/OrderPage/OrderPage';
import CustInfoForm from '../CustInfoForm/CustInfoForm';
import AdminPage from '../AdminPage/AdminPage';
import Checkout from '../Checkout/Checkout';

class NavBar extends Component {

    render () {
        return (
            <Router>
            <div>
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/custInfo'>Customer Info</Link></li>
                    <li><Link to ='/checkout'>Checkout</Link></li>
                </ul>

                <Route exact path='/' component={OrderPage}/>
                <Route path='/custInfo' component={CustInfoForm}></Route>
                <Route path='/checkout' component={Checkout}></Route>
                <Route path='/admin' component={AdminPage}></Route>
            </div>
            </Router>
        )
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(NavBar);

