import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className="page-home">

				<section id="hero" className="hero has-image outer">
					<div className="hero-image-wrap hero-overlay-dark">
						<div 
							className="hero-image"
							style={{ backgroundImage: "url(https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579924892/DD_hto2iz.png)" }}>
						</div>
					</div>

					<div className="trim gutter hero-inner">
						<div className="hero-content wrapper">
							<h1>Find Your Adventure Here</h1>
							<hr />
							<p>Sed sodales elit sed quam volutpat posuere. Quisque ut nulla maximus, ultrices tellus ac, sollicitudin metus. Nam vitae neque ornare, posuere erat at, tempus metus. Vestibulum mattis justo vitae velit egestas fermentum.</p>
							<Link to="/login" className="btn mar-t">Login</Link>
						</div>
					</div>
				</section>

				<section className="frame frame--top outer half-row column_left_on_top">
					<div className="half-row__column-left">
						<div className="trim gutter half-row__block image_full">
							<div className="gutter half-row__wrap image_full__wrap">
								<div 
									className="bg-img"
									style={{ backgroundImage: "url(https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579926587/eberron2_vvu7cc.jpg)" }}>
								</div>
							</div>
						</div>
					</div>

					<div className="half-row__column-right">
						<div className="trim gutter half-row__block {{ type }}">
							<div className="gutter half-row__wrap {{ type }}__wrap">
								<div class="heading-content">
									<h5>Some Subheading Thing</h5>
									<h3>The Main Heading</h3>
									<div class="copy">
										<p>Sed sodales elit sed quam volutpat posuere. Quisque ut nulla maximus, ultrices tellus ac, sollicitudin metus. Nam vitae neque ornare, posuere erat at, tempus metus. Vestibulum mattis justo vitae velit egestas fermentum.</p>
									</div>
									<a class="btn" href="/dev">
										Development
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="frame mb:frame--not dt:frame--bot outer half-row column_right_on_top">
					<div className="half-row__column-left">
						<div className="trim gutter half-row__block {{ type }}">
							<div className="gutter half-row__wrap {{ type }}__wrap">
								<div class="heading-content">
									<h5>Some Subheading Thing</h5>
									<h3>The Main Heading</h3>
									<div class="copy">
										<p>Sed sodales elit sed quam volutpat posuere. Quisque ut nulla maximus, ultrices tellus ac, sollicitudin metus. Nam vitae neque ornare, posuere erat at, tempus metus. Vestibulum mattis justo vitae velit egestas fermentum.</p>
									</div>
									<a class="btn" href="/dungeon">
										Dungeon
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="half-row__column-right">
						<div className="trim gutter half-row__block image_full">
							<div className="gutter half-row__wrap image_full__wrap">
								<div 
									className="bg-img"
									style={{ backgroundImage: "url(https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579925232/scag_quu8af.jpg" }}>
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