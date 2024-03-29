import axios from 'axios';

// export action types

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERED_USER = 'REGISTERED_USER';
export const FAILED_REGISTER = 'FAILED_REGISTER';
export const ADDING_EVENT_TYPE = 'ADDING_EVENT_TYPE';
export const ADDED_EVENT_TYPE = 'ADDED_EVENT_TYPE';


// register user function

export function registerUser(payload) {

    /* register data here */

    return dispatch => {

        dispatch({ type: REGISTERING_USER });

        return axios.post(`https://eventr-server.herokuapp.com/api/users/register`, payload)
          .then((response) => {
            dispatch({ type: REGISTERED_USER, payload: response.data });
          })
    
          .catch((error) => {
            dispatch({ type: FAILED_REGISTER, payload: error })
          })
    
          }
}

export function addEventType(payload) {

  return dispatch => {

    dispatch({ type: ADDED_EVENT_TYPE, payload })
  }
}