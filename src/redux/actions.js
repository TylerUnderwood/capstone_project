
// LOGIN
export const login = ( username ) => {
	return {
			type: 'LOGIN',
			value: username
	}
}
export const logout = () => {
	return {
			type: 'LOGOUT',
			value: 'Guest'
	}
}

// NAV
export const activateNavLeft = () => {
	return {
		type: 'NAV_LEFT'
	}
}
export const activateNavRight = () => {
	return {
		type: 'NAV_RIGHT'
	}
}
export const closeNavs = () => {
	return {
		type: 'NAV_CLOSE'
	}
}

// CHARACTERS
export const fetchCharacters = () => {
	console.log("FETCHING")
	return dispatch => {
		fetch("/api/characters")
		.then(res => res.json())
		.then(res => {
			const action = {
				type: "FETCH_CHARACTERS",
				value: res
			};
			dispatch(action);
		})
		.catch(error => console.log(error));
	};
};