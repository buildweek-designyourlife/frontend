import React from 'react'


const Activity = (props) => {
    return (
        <div>
            <h1>{props.activity.name}</h1>
            <ul>
                <li>Enjoyment: {props.activity.enjoyment}</li>
                <li>Engagement: {props.activity.engagement}</li>
                <li>Notes: {props.activity.notes}</li>
            </ul>
        </div>
    )
}

export default Activity
