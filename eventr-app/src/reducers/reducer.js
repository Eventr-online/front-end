import {
    REGISTERING_USER,
    REGISTERED_USER
} from '../actions/index';

let initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''

    },
    token: ''
}

/* persistent storage */

const persistedState = localStorage.getItem('reduxState');

if (persistedState) {
    initialState = JSON.parse(persistedState)
}

/* reducer */

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case REGISTERING_USER: {
            return {
                ...state
            }
        }

        case REGISTERED_USER: {
            return {
                ...state,
                user: {
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        }
        
        default: {
            return state;
        }
    }
}

export default reducer;