import React, { Component } from 'react';
import './App.css';
import AdminPage from '../AdminPage/AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <AdminPage/>
      </div>
    );
  }
}

export default App;
