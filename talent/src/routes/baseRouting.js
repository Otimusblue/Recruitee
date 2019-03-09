
import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import style from '../styles/baseRouting.scss';
import Dashboard from './dashboardRouting.js';
import Jobs from './jobsRouting.js';

const candidatesmenu = [
    {
        name: 'Qualified candidates',
        id: 'qualified-candidates'
    },
    {
        name: 'Disqualified',
        id: 'disqualified'
    },
    {
        name:'Followed candidates',
        id:'followed-candidates'
    }
]


function Candidates(){
    return(
        <ul>
            {candidatesmenu.map( ({name,id}) => (
                <li key={id}>
                <Link to={'/candidates/${id}'}>{name}   </Link>
                </li>
            ))
            }
        </ul>
    )
}

function Mailbox(){
    return(
        <h1> This is mail box</h1>  
    )
}
function Reports(){
    return(
        <h1> This is reports</h1>  
    )
}
function Setting(){
    return(
        <h1> This is settings</h1>  
    )
}
function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>
        <ul style={{listStyleType:'none'}}>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
const menuData = [
    {
        url:'/home',
        name:'Dashboard',
    },
    {
        url:'/candidates',
        name:'Candidates',
    },
    {
        url:'/jobs',
        name:'Jobs',
    },
    {
        url:'/mailbox',
        name:'Mailbox',
    },
    {
        url:'/reports',
        name:'Reports',
    },
    {
        url:'/setting',
        name:'Settings',
    },
    {
        url:'/topics',
        name:'Topics',
    }
]

function baseRouting(props){
   
        console.log(props);
        const renderMenuData = menuData.map((itemData,index) =>
        <li key={index} className={style.mainBarItem}>
            <Link to={`${itemData.url}`}>{itemData.name}</Link>
        </li>
        )
        return (
           <Router>
               <div className={style.sideBar}>
                <ul className={style.mainBar}>
                    {renderMenuData}
    
                    <Route path='/home' component={Dashboard} />
                    <Route path='/candidates' component={Candidates} />
                    <Route path='/jobs' component={Jobs} />
                    <Route path='/mailbox' component={Mailbox} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/setting' component={Setting} />
                    <Route path="/topics" component={Topics} />
                    </ul>
                </div>
           </Router>
            )
        
    
    
}
export default baseRouting;