import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewActivity } from '../actions';
import { Button, Input, Form, Icon } from 'antd';

const ActivityInput = ({ addNewActivity }) => {
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
     
      return ( 
    <Form onSubmit={addActivities} name="activity" layout="inline">
        <Form.Item>
          <Input 
          layout="inline" 
          name="name" 
          value={activity.name} 
          onChange={handleChanges} 
          placeholder="Name of Activity" />
        </Form.Item>
        <Form.Item>
          <Input 
          layout="inline" 
          name="enjoyment" 
          value={activity.score} 
          onChange={handleChanges} 
          placeholder="Enjoyment from 1-10" />
        </Form.Item>
        <Form.Item>
          <Input 
          layout="inline" 
          name="engagement" 
          value={activity.score} 
          onChange={handleChanges} 
          placeholder="Engagement from 1-10" />
        </Form.Item>
        <Form.Item>
          <Input 
          layout="inline" 
          name="notes" 
          value={activity.notes} 
          onChange={handleChanges} 
          placeholder="Description" />
        </Form.Item>
        <Form.Item>
          <Button 
          type="primary" 
          value="submit">Submit Activity Log</Button>
        </Form.Item>
     </Form>
      )
    }

export default connect(null, { addNewActivity })(ActivityInput)
