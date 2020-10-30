import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import OrderPage from '../PageOne/OrderPage/OrderPage';

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
                {/* <Route path='/custInfo' component={}></Route> */}
                {/* <Route path='/checkout' component={}></Route> */}
            </div>
            </Router>
        )
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(NavBar);

