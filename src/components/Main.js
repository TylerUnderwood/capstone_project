import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	closeNavs,
} from '../redux/actions'

class Main extends Component {

	render() {

		const navLeftActive = this.props.activeElements.navLeft
		const navRightActive = this.props.activeElements.navRight

		return (
			<div 
				className={`viewbox 
					${navLeftActive ? 'slide-to-the-left' : ''} 
					${navRightActive ? 'slide-to-the-right' : ''}
				`}
				onClick={() => this.props.closeNavs()}>

				{this.props.children}

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