import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from '../styles/baseRouting.scss'; 
const jobsmenu = [
    {
        name: 'Actives Jobs',
        id:'actives-jobs',
        mount:'115',
        content:'jobs1'
    },
    {
        name: 'Archived',
        id:'archived',
        mount:'115',
        content:'jobs2'
    }
]
function jobsItem ({match}) {
    const eachItem = jobsmenu.find(({ id })=> id === match.params.topicId)
    
    return (
      <div>
        {eachItem.content}
      </div>
    )
  }
  
  function Jobs ({ match }) {
     
    return (
      <div>
        <ul className="sub-bar"> 
          {jobsmenu.map(({ name, id }) => (
            <li key={id}>
              <Link to={`/jobs/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>  
        <Route path={`/jobs/:topicId`} component={jobsItem}/>
      </div>
    )
  }
  export default Jobs;

