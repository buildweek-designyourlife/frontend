import React from 'react';
import { connect } from 'react-redux';
import Activity from './Activity';

const ActivityList = props => {
    return (
        <div>
            {props.activities.map(activity => {
                return <Activity key={activity.name} activity={activity} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ActivityList)
