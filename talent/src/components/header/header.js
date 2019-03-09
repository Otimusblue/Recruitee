import React, { Component } from 'react';
import style from '../../styles/baseRouting.scss';
import logo from '../../images/';

function Header(){
    return (
       <div className="header">
      <div className="logo"><img src="images/logo.png" /> </div>
      <div class="options">
        <label class="career-site">Career site</label>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      </div>
    );
}
export default Header;

