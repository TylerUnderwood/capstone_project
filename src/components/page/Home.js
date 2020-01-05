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

				<hr />

				<section className="frame gutter">
					<div className="wrapper">

						<div className="book">
							<div className="book__page book__page--left parchment">
								<div className="book__text">
									<p>
										Praesent ornare lectus mi, non eleifend mauris vulputate quis. Nam ac arcu ut nunc sollicitudin tristique. Mauris erat magna, laoreet id commodo vitae, maximus sollicitudin mi.
									</p>
									<p>
										Fusce venenatis ligula et lectus maximus, quis porttitor mauris varius. Integer at ipsum at turpis sodales rutrum. Duis ultricies vestibulum porttitor. Aliquam urna tellus, rutrum ut gravida ut, ullamcorper sit amet justo. Aliquam tristique auctor ex id dignissim. Vestibulum sodales urna id pharetra condimentum. Cras fermentum vitae ante a imperdiet.
									</p>
									<p>
										Morbi neque orci, placerat eu enim placerat, finibus tempus purus. Aenean ac nibh turpis.
									</p>
									<p>
										Vestibulum rhoncus placerat rutrum. Etiam sagittis interdum elit, at gravida risus sodales vitae. Nunc nec sem nec ligula aliquam pulvinar. Nulla quis tempus eros.
									</p>
									<p>
										Aliquam urna tellus, rutrum ut gravida ut, ullamcorper sit amet justo. Aliquam tristique auctor ex id dignissim. Vestibulum sodales urna id pharetra condimentum. Cras fermentum vitae ante a imperdiet. eleifend mauris vulputate quis. Nam ac arcu ut nunc sollicitudin tristique. Mauris erat magna, laoreet id commodo vitae, maximus sollicitudin mi.
									</p>
								</div>
							</div>
							<div className="book__page book__page--right parchment">
								<div className="book__text">
									<p>
										Praesent ornare lectus mi, non eleifend mauris vulputate quis. Nam ac arcu ut nunc sollicitudin tristique. Mauris erat magna, laoreet id commodo vitae, maximus sollicitudin mi.
									</p>
									<p>
										Fusce venenatis ligula et lectus maximus, quis porttitor mauris varius. Integer at ipsum at turpis sodales rutrum. Duis ultricies vestibulum porttitor. Aliquam urna tellus, rutrum ut gravida ut, ullamcorper sit amet justo. Aliquam tristique auctor ex id dignissim. Vestibulum sodales urna id pharetra condimentum. Cras fermentum vitae ante a imperdiet.
									</p>
									<p>
										Morbi neque orci, placerat eu enim placerat, finibus tempus purus. Aenean ac nibh turpis.
									</p>
									<p>
										Vestibulum rhoncus placerat rutrum. Etiam sagittis interdum elit, at gravida risus sodales vitae. Nunc nec sem nec ligula aliquam pulvinar. Nulla quis tempus eros.
									</p>
									<p>
										Aliquam urna tellus, rutrum ut gravida ut, ullamcorper sit amet justo. Aliquam tristique auctor ex id dignissim. Vestibulum sodales urna id pharetra condimentum. Cras fermentum vitae ante a imperdiet. eleifend mauris vulputate quis. Nam ac arcu ut nunc sollicitudin tristique. Mauris erat magna, laoreet id commodo vitae, maximus sollicitudin mi.
									</p>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
			</div>
		)
	}
}

export default Home