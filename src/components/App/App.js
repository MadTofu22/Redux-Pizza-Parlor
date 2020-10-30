import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../NavBar/NavBar';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <NavBar />
        <br/>
        {/* <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p> */}
        
      </div>
    );
  }
}

const putReduxStateOnProps = (ReduxState) => ({ReduxState});
export default connect(putReduxStateOnProps)(App);