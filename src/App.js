import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addNewActivity } from './actions';


function App({ addNewActivity }) {
  const [state, setState] = useState({
    title: '',
    score: '',
    description: ''
  })

  const addActivities = () => {
    const activity = {
      title: state.title,
      score: state.score,
      description: state.description,
      id: Date.now()
  }
  addNewActivity(activity)
  setState({
      title: '',
      score: '',
      description: '',
      id: ''
  })
  } 
  const handleChanges = (event) => {
    event.preventDefault();
    setState({
      [event.target.name] : event.target.value
    })
  }
 
  
  return (
    <form onSubmit={addActivities}>
      <input name="title" value={state.title} onChange={handleChanges} placeholder="Title of Activity" />
      <input name="score" value={state.score} onChange={handleChanges} placeholder="Score from 1-10" />
      <input name="description" value={state.description} onChange={handleChanges} placeholder="Description" />
      <button type="submit">Submit Activity Log</button>
    </form>
  )
}

export default connect(null, { addNewActivity })(App)