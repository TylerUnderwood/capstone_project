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
						<img className="mar-t" src="https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579925244/kisspng-dungeons-dragons-pathfinder-roleplaying-game-vol-5af623a21dd546.1200128415260804181222_hhrhgc.png" alt="Kobolds"/>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Error404