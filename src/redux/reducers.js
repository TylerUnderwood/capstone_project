import { combineReducers } from 'redux'
import initialState from '../redux/state';

const currentUser = ( state = initialState, action ) => {

	const updatedUser = { }

    switch(action.type) {
        case 'LOGIN':
			updatedUser.username = action.value
			updatedUser.loggedIn = true
            return {
				...state,
				username: updatedUser.username,
				loggedIn: updatedUser.loggedIn
			}
        case 'LOGOUT':
			updatedUser.username = action.value
			updatedUser.loggedIn = false
			return {
				...state,
				username: updatedUser.username,
				loggedIn: updatedUser.loggedIn
			}
        default:
            return state
    }
}

const characters = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_CHARACTER':
            return [ ...state, action.value ]
        case 'REMOVE_CHARACTER':
            const characters = [ ...state ]
            characters.splice(action.value, 1)
            return characters
        default:
            return state
    }
}

export default combineReducers({ currentUser, characters })