import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {

	render() {
		return (
			<footer id="footer" className="site-footer">
				<div className="wrapper site-footer__inner">

					<h5 id="logo" className="footer__logo">
						<Link to="/">Nulyph</Link>
					</h5>

					<div className="filler"></div>

					<a className="link geo-text" href="#top">Back To Top</a>

				</div>
			</footer>
		)
	}
}

export default Footer