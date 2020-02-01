
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
		fetch( "api/characters" )
		.then( res => {console.log('Response:', res); res.json()} )
		.then( data => {
			console.log(data)
			const action = {
				type: "FETCH_CHARACTERS",
				value: data,
			};
			dispatch(action);
		})
		.catch( error => console.log(error) );
	};
};