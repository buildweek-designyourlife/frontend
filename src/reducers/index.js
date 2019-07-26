import { FETCHING_ACTIVITY, ADD_ACTIVITY_SUCCESS, ADD_ACTIVITY_ERROR } from '../actions';

const initialState = {
    activities: [
        {
            title: 'Initial Title',
            score: 'Initial Score',
            description: 'Initial Description',
            id: 'Initial ID'
        },
    ],
    fetchingActivities: false,
    addingActivity: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ACTIVITY_SUCCESS:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        default:
            return state;
    }
}