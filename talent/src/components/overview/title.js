import React, { Component } from 'react';

function Title(props){
    return (
    <div className="blockTitle">
      <div className="title">
         {props.title}
      </div>
        <div className="amount">
         {props.amount}
      </div>
    </div>
    );
}
export default Title;