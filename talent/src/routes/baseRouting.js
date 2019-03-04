
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/baseRouting.scss';
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

function baseRouting(){
    return (
       <Router>
           <div className="container">
            <ul className="main-bar">
                <li><Link to="/home">Dashboard</Link></li>
                <li><Link to="/candidates">Candidates</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/mailbox">Mailbox</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/setting">Setting</Link></li>
                <li><Link to="/topics">Topics</Link></li>

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