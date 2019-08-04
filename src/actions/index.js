import axios from 'axios';

export const FETCHING_ACTIVITY = 'FETCHING_ACTIVITY';
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_ERROR = 'ADD_ACTIVITY_ERROR';

export const LOGGING_IN = 'LOGGING_IN';

export const addNewActivity = (newActivity) => {
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

export const login = () => dispatch => {
    dispatch({
        type: LOGGING_IN
    });
    axios
    .post('https://backend-designyourlife.herokuapp.com//api/auth/login', {
        "username": "userName",
        "password": "password"
    })
    .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token)
    })
    .catch(err => {
        console.log(err);
    })
}