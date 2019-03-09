import React, { Component } from 'react';
// import style from '../../styles/baseRouting.scss';
import logo from '../../images/logo.png';
import styleHeader from '../../styles/header.scss';

function Header(){
    return (
       <div className="header">
         <div className="logo"><img src={logo} /> </div>
          <div class="options">
            <div class="ui simple dropdown">
               <button class="ui button careerSite">
                  Career Site
               </button>
               <div class="menu">
                   <div class="item">
                  <h5> ADD NEW </h5>
                  </div>
               <div class="divider"></div>
               <div class="item">
                  <h5> Candidates</h5>
               </div>
               <div class="divider"></div>
               <div class="item">
                  <h5> Jobs</h5>
               
               </div>
               <div class="divider"></div>
            <div class="item">
               <h5>Team member</h5>
            </div>
            </div>
         </div>
         <button class="circular ui icon button">
         <i class="icon settings"></i>
         </button>
         
         <button class="circular ui icon button">
         <i class="icon settings"></i>
         </button>
         <button class="circular ui icon button">
         <i class="icon settings"></i>
         </button>
         <button class="circular ui icon button">
         <i class="icon settings"></i>
         </button>
      </div>
      </div>
    );
}
export default Header;

