import {
    REGISTERING_USER,
    REGISTERED_USER,
    FAILED_REGISTER,
    ADDING_EVENT_TYPE,
    ADDED_EVENT_TYPE
} from '../actions/index';


let initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        events: {
            type: '',
            name: 'No Name Event'
        }
    },
    token: '',
}

/* persistent storage */

// const persistedState = localStorage.getItem('reduxState');

// if (persistedState) {
//     initialState = JSON.parse(persistedState)
// }

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
                    ...state.user,
                    firstname: action.payload.user.firstname,
                    lastname: action.payload.user.lastname,
                    email: action.payload.user.email,
                    password: action.payload.user.password
                }
            }
        }

        case FAILED_REGISTER: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        case ADDING_EVENT_TYPE: {
            return {
                ...state
            }
        }

        case ADDED_EVENT_TYPE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    events: {
                        ...state.user.events,
                        type: action.payload
                    }
                }
            }
        }
        
        default: {
            return state;
        }
    }
}

export default reducer;