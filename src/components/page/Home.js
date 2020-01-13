import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className="page-home">
	
				<section className="frame gutter">
					<div className="wrapper">
						<Link to="/login" className="btn">Login</Link>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Home