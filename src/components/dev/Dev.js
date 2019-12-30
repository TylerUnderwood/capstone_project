import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dev extends Component {
	render() {
		return (
			<div className="page-dev">
	
				<section className="frame gutter">
					<div className="wrapper">
						<div className="auto-wrap">
							<Link to="/dev/typography" className="btn auto-wrap__item">Typography</Link>
							<Link to="/dev/inputs" className="btn auto-wrap__item">Inputs</Link>
						</div>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Dev