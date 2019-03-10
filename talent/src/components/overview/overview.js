import React, { Component } from 'react';
import Title from '../../components/overview/title.js';

class OverView extends React.Component{
    render(){
        return(
            <div>
            <Title title='hieu' amount='100'/>
            <br />
            <Title title='aaa' amount='200' />
            </div>
        )
    }
}
export default OverView;