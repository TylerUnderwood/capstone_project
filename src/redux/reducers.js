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

	const bodyClasses    = document.body.classList
	const lockClass      = 'scroll-lock'
	const leftClass      = 'nav-left--active'
	const rightClass     = 'nav-right--active'
	const navLeftActive  = state.navLeft
	const navRightActive = state.navRight

	let newState;

	switch( action.type ) {
		case 'NAV_LEFT':
			if ( !navLeftActive && !navRightActive ) {
				bodyClasses.add(lockClass)
			}
			// Toggle the current state
			newState = !navLeftActive
			// Toggle the class for the body
			bodyClasses.toggle(leftClass)
			// If the nav is turning off and the other nav isnt active unlock the body
			if ( navLeftActive && !navRightActive ) {
				bodyClasses.remove(lockClass)
			}
			// Update state
			return {
				...state,
				navLeft: newState
			}
		case 'NAV_RIGHT':
			if ( !navLeftActive && !navRightActive ) {
				bodyClasses.add(lockClass)
			}
			// Toggle the current state
			newState = !navRightActive
			// Toggle the class for the body
			bodyClasses.toggle(rightClass)
			// If the nav is turning off and the other nav isnt active unlock the body
			if ( !navLeftActive && navRightActive ) {
				bodyClasses.remove(lockClass)
			}
			// Update state
			return {
				...state,
				navRight: newState
			}
		case 'NAV_CLOSE':
			// Remove all the active classes
			if ( navLeftActive || navRightActive ) {
				bodyClasses.remove(lockClass, leftClass, rightClass)
			}
			// Update state
			return {
				...state,
				navLeft: false,
				navRight: false,
			}
		default:
			return state
	}
}

const charactersList = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_CHARACTERS':
			console.log(action.value)
			return action.value
		case 'ADD_CHARACTERS':
			return [ ...state, action.value ]
		case 'REMOVE_CHARACTERS':
			charactersList.splice(action.value, 1)
			return charactersList
		default:
			return state
	}
}

export default combineReducers({ 
	currentUser,
	activeElements,
	charactersList,
})