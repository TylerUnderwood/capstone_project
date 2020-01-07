import { combineReducers } from 'redux'
import initialState from '../redux/state';

const currentUser = ( state = initialState, action ) => {

    switch( action.type ) {
        case 'LOGIN':
            return {
				...state,
				username: action.value,
				loggedIn: true
			}
        case 'LOGOUT':
			return {
				...state,
				username: action.value,
				loggedIn: false
			}
        default:
            return state
    }
}

const activeElements = ( state = initialState, action ) => {

	switch( action.type ) {
		case 'NAV_LEFT':
			let navLeft = !state.navLeft
			return {
				...state,
				navLeft: navLeft
			}
		case 'NAV_RIGHT':
			let navRight = !state.navRight
			return {
				...state,
				navRight: navRight
			}
		case 'NAV_CLOSE':
			return {
				...state,
				navLeft: false,
				navRight: false,
			}
		default:
			return state
	}
}

export default combineReducers({ 
	currentUser,
	activeElements,
})