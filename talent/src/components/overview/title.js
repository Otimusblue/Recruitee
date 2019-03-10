import React, { Component } from 'react';
import titleStyle from '../../styles/overview.scss';

function Title(props){
    return (
    // <div className="blockTitle">
    //   <div className="title">
    //      {props.title}
    //   </div>
    //     <div className="amount">
    //      {props.amount}
    //   </div>
    // </div>
    <div class="titleContainer">
    <div class="ui segment">
       <div className="title">
          {props.title}
       </div>
         <div className="amount">
          {props.amount}
       </div>
      </div>
      </div>
    );
}
export default Title;