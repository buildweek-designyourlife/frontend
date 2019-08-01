import axios from 'axios';

export const FETCHING_ACTIVITY = 'FETCHING_ACTIVITY';
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_ERROR = 'ADD_ACTIVITY_ERROR';

export const addNewActivity = (newActivity) => {
    console.log("newActivity", newActivity)
    return {
        type: ADD_ACTIVITY_SUCCESS,
        payload: newActivity
    }
}

export const getActivity = () => dispatch => {
    dispatch({
        type: FETCHING_ACTIVITY
    });
    axios
    .get('https://backend-designyourlife.herokuapp.com/')
    .then(response => {
        dispatch({
            type: ADD_ACTIVITY_SUCCESS,
            payload: response.data.results
        })
    })
    .catch((err) => {
        console.log("err", err)
        dispatch({
            type: ADD_ACTIVITY_ERROR
        })
    })
}