// import axios from 'axios';

// export action types

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERED_USER = 'REGISTERED_USER';


// register user function

export function registerUser(payload) {

    /* register data here */

    return dispatch => {

        dispatch({ type: REGISTERING_USER });

        return dispatch({ type: REGISTERED_USER, payload });
    }
}