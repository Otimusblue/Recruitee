import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../styles/dashboard.scss';  
// import logo from '../images/default.png';
    const dashboardmenu  = [
        {
            name: 'Overview',
            image:'',
            id: 'overview',
            content:'1'
        },
        {
            name: 'Tasks',
            image:'',
            id: 'tasks',
            content:'2'
        },
        {
            name:'Activities',
            image:'',
            id:'activities',
            content:'3'
        },
        {
            name:'Notifications',
            image:'',
            id:'notifications',
            content:'4'
        }
    ]
    function dashboardItem ({match}) {
        const eachItem = dashboardmenu.find(({ id })=> id === match.params.topicId)
        
        return (
        <div>
            {eachItem.content}
        </div>
        )
    }
    
    function Dashboard ({ match }) {
        
        return (
        <div className="sidebar">
            <ul className="sub-bar">
            {dashboardmenu.map(({ name, id }) => (
                <li key={id}>
                <Link to={`/home/${id}`}>{name}</Link>
                </li>
            ))}
            </ul>
            <Route path={`/home/:topicId`} component={dashboardItem}/>
        </div>
        )
    }
    export default Dashboard;
