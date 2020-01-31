import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'

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
									<img src="https://res.cloudinary.com/cyborgspaceviking/image/upload/v1580496374/LxFEG_sdclxg.jpg" alt="duck" />
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