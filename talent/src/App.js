import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseRouting from './routes/baseRouting.js';
import ChartComponent from '../src/components/Chart.js';

class App extends Component {
  render() {
    return (
      <div>
       
     <BaseRouting />
      
     </div>
    );
  }
}

export default App;