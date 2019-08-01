import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { addNewActivity } from './actions';
import Login from './components/Login';
import ActivityList from './components/ActivityList';
import SignUp from './components/SignUp';


function App({ addNewActivity }) {
  const [activity, setActivity] = useState({
    name: '',
    enjoyment: '',
    engagement: '',
    notes: '',
    id: ''
  })

  const addActivities = (event) => {
    event.preventDefault();
    const newActivity = {
      name: activity.name,
      enjoyment: activity.enjoyment,
      engagement: activity.engagement,
      notes: activity.notes,
      id: Date.now()
  }
  addNewActivity(newActivity)
  setActivity({
      name: '',
      enjoyment: '',
      engagement: '',
      notes: '',
      id: ''
  })
  } 
  const handleChanges = (event) => {
    setActivity({
      ...activity,
      [event.target.name] : event.target.value
    })
  }
 
  console.log("activity", activity)
  return ( 
    <div>
      <nav>
      <NavLink to="/">Add Activity</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/activitylog">Activity Log</NavLink>
      </nav>
      <Router path="/" />
      <Router path="/login" component={Login} />
      <Router path="/register" component={SignUp} />
      <Router path="/activitylog" component={ActivityList} />    
      <Login />
      <SignUp />
      <form onSubmit={addActivities} name="activity">
        <input name="name" value={activity.name} onChange={handleChanges} placeholder="Name of Activity" />
        <input name="enjoyment" value={activity.score} onChange={handleChanges} placeholder="Enjoyment from 1-10" />
        <input name="engagement" value={activity.score} onChange={handleChanges} placeholder="Engagement from 1-10" />
        <input name="notes" value={activity.notes} onChange={handleChanges} placeholder="Description" />
        <button type="submit" value="submit">Submit Activity Log</button>
      </form>
    </div>
  )
}

export default connect(null, { addNewActivity })(App)