import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';



class PizzaList extends Component {

    state = {
        pizzas: []
    }

    componentDidMount = () => {
        this.getPizzas();
    }

    getPizzas = () => {

        axios.get('/api/pizza').then(response => {
            this.setState({
                pizzas: response.data
            });
        }).catch(error => {
            console.log(error);
        })
    }

    render () {
        return (
            <section>
                {/* {JSON.stringify(this.state.pizzas)} */}
                {this.state.pizzas.map(pizza => {
                    return <PizzaItem pizza={pizza} />
                })}
            </section>
        );
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(PizzaList);