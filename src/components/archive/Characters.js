import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Characters extends Component {
	render() {
		return (
			<div className="entry-character">
	
				<section className="frame gutter">
					<div className="wrapper">
						
						<Link className="btn" to="/characters/character">Character</Link>

					</div>
				</section>
				
			</div>
		)
	}
}

export default Characters