import React, { Component } from 'react';

function Searchbar(){
    return (
        <div class="ui search">
            <div class="ui icon input">
             <input class="prompt" type="text" placeholder="Search countries..."/>
                <i class="search icon"></i>
            </div>
         <div class="results"></div>
        </div>
         );
}
export default Searchbar;