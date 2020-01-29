import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	closeNavs,
} from '../redux/actions'

class Main extends Component {

	closeNavs() {
		const navLeftActive = this.props.activeElements.navLeft
		const navRightActive = this.props.activeElements.navRight

		if ( navLeftActive || navRightActive ) {
			this.props.closeNavs()
		}
	}

	render() {

		const navLeftActive = this.props.activeElements.navLeft
		const navRightActive = this.props.activeElements.navRight

		return (
			<div 
				id="container"
				className={`viewbox 
					${navLeftActive ? 'slide_to_the_left' : ''} 
					${navRightActive ? 'slide_to_the_right' : ''}
				`}>

				{this.props.children}

				<div className="container__overlay" onClick={() => this.closeNavs()}></div>
			</div>
		)
	}
}

const mapStateToProps = ( state ) => {
    return {
		activeElements:   state.activeElements,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		closeNavs:  () => dispatch( closeNavs() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Main)