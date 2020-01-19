import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
	render() {
		return (
			<div className="error-404">
	
				<section className="trim gutter">
					<div className="wrapper">
						<h3 className="mar-b">404: Page not found</h3>
						<Link to="/" className="btn">Back to the Homepage</Link>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Error404