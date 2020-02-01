import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	login,
	logout,
	fetchCharacters,
} from '../redux/actions'
import cookie from 'cookie'


class Startup extends Component {

	componentDidMount() {
		this.props.fetchCharacters()

		const cookies = cookie.parse(document.cookie)
		// get the username from the cookie
		const username = cookies["NULYPH_USER"]
		const isLoggedIn = username ? true : false

		if ( isLoggedIn ) {
			this.props.login( username )
		} else {
			this.props.logout()
		}
	}

	render() {
		return this.props.currentUser.loggedIn
			? <noscript>Logged In</noscript>
			: <noscript>Logged Out</noscript>
	}
}


const mapStateToProps = ( state ) => {
    return {
		currentUser: state.currentUser,
		charactersList: state.charactersList,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		login:           ( username ) => dispatch( login( username ) ),
		logout:          ()           => dispatch( logout() ),
		fetchCharacters: ()           => dispatch( fetchCharacters() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Startup)