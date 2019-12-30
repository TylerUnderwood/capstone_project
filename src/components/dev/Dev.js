import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dev extends Component {
	render() {
		return (
			<div className="page-dev">
	
				<section className="frame gutter">
					<div className="wrapper">
						<Link to="/dev/typography" className="btn">Typography</Link>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Dev