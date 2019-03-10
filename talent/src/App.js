import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseRouting from './routes/baseRouting.js';
import Title from './components/overview/title.js';
import Header from './components/header/header';
import Overview from './components/overview/overview.js';
import base from './styles/base.scss';

class App extends Component {
  render() {
    return (
      <div id="App" >
        {/* <Header /> */}
       {/* <BaseRouting />
       <Overview />  */}
      
  <div class="grid-container">
        <Header />
      <aside class="sidebar">
         <BaseRouting />
      </aside>

      <main class="main">
      <div class="amount">
        <div class="candicates">
          <div class="candicates-content">
            <div class="title">Candicates</div>
            <div class="count">100</div>
          </div>
        </div>
        <div class="jobs">
          <div class="jobs-content">
            <div class="title">Jobs Opening</div>
            <div class="count">6</div>
          </div>
        </div>
      </div>
      <div class="graph">
            <div class="graph-header">
              <div class="graph-header-title">Candidates</div>
              <div class="graph-header-dropdown"></div>
              <div class="header-line"></div>
            </div>
            <div class="graph-content">Content 
              
              <div class="content-line"></div>
            </div>
            <div class="graph-footer">
              <div class="amount-careersite">
                <div class="career-title">Applied via career site</div>
                <div class="career-amount">50</div>
              </div>
              <div class="amount-email">

                <div class="email-title">Applied via email</div>
                <div class="email-amount">50</div>

              </div>
              <div class="amount-manually">
                <div class="manually-title">Added manually</div>
                <div class="manually-amount">5</div>
              </div>
              <div class="amount-sourced">
                  <div class="sourced-title">Added manually</div>
                  <div class="sourced-amount">20</div>
              </div>
            </div>
        </div>
      </main>
  </div>

     </div>
    );
  }
}

export default App;


