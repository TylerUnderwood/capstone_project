import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
	render() {
		return (
			<div className="error-404">
	
				<section className="trim gutter">
					<div className="wrapper">
						<h3 className="mb">404: Page not found</h3>
						<Link to="/">Back to the Homepage</Link>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Error404