import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';

class OrderPage extends Component {

    render () {
        return (
            <div>
                <Header />
                <PizzaList />
                Test
            </div>
        );
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(OrderPage);