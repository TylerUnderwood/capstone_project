import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import Duck from '../../assets/img/duck-of-doom.jpg'

class Dev extends Component {
	render() {
		return (
			<div className="page-dev">
	
				<section className="frame gutter">
					<div className="wrapper">
						<div className="auto-wrap">
							<Link to="/dev/typography" className="btn auto-wrap__item">Typography</Link>
							<Link to="/dev/inputs" className="btn auto-wrap__item">Inputs</Link>
							<div className="auto-wrap__item">
								<Modal>
									<img src={ Duck } />
								</Modal>
							</div>
							<Link to="/dev/sandbox" className="btn auto-wrap__item">Sandbox</Link>
						</div>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Dev