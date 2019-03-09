import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseRouting from './routes/baseRouting.js';
import Title from './components/overview/title.js';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div id="App" >
       <Header />
       <BaseRouting />

     </div>
    );
  }
}

export default App;


