import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../redux/actions'
import cookie from 'cookie'

class Startup extends Component {

	componentDidMount() {
		const cookies = cookie.parse(document.cookie)
		const isLoggedIn = cookies["loggedIn"] ? true : false

		if ( isLoggedIn ) {
			this.props.login( 'Cookie Monster' )
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
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		login: ( user ) => dispatch( login( user ) ),
		logout: () => dispatch( logout() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Startup)