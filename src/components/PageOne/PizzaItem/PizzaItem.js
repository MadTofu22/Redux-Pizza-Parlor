import React, {Component} from 'react';
import {connect} from 'react-redux';

class PizzaItem extends Component {

    state = {
        clicked: false
    }

    handleSubmit = () => {

        this.setState({
            clicked: true
        });
        
        this.props.dispatch({
            type: 'ADD_TO_CART', 
            payload: {
                name: this.props.pizza.name,
                price: this.props.pizza.price
            }
        });
    }

    render () {
        return (
            <div>
                <img src={this.props.pizza.image_path}></img>
                <div>
                    <h5>{this.props.pizza.name}</h5>
                    <p>{this.props.pizza.description}</p>
                </div>
                <button id='inCart' onSubmit={this.handleSubmit}>
                    {this.state.clicked ?
                    <p>Remove</p>
                    :
                    <p>Add</p>}
                </button>
            </div>
        )
    }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(PizzaItem);