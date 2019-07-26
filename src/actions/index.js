export const FETCHING_ACTIVITY = 'FETCHING_ACTIVITY';
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_ERROR = 'ADD_ACTIVITY_ERROR';

export const addNewActivity = (activity) => {
    return {
        type: ADD_ACTIVITY_SUCCESS,
        payload: activity
    }
}