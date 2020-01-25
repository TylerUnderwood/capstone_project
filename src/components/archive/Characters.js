import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Characters extends Component {
	render() {
		return (
			<div className="entry-character">
	
				<section className="frame gutter">
					<div className="wrapper">
						
						<Link className="character-card" to="/characters/character">
							<div 
								className="character-card__banner bg-img"
								style={{ backgroundImage: "url(https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579926596/2R3osOw_yzh3si.jpg)" }}>
							</div>
							<div 
								className="character-card__image bg-img"
								style={{ backgroundImage: "url('https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579924603/lpidkukq0al11_j36a2d.png')" }}>
							</div>
							<div className="character-card__content">
								<div className="w-50">
									<h4>Krunk</h4>
									<div className="inline-list inline-list--pipline geo-text">
										<span className="inline-list__item">Orc</span>
										<span className="inline-list__item">Bard</span>
									</div>
								</div>
								<div className="w-50 text-right">
									<span className="character-card__level">
										<span className="level__text">lvl</span>
										<span className="level__number">12</span>
									</span>
								</div>
							</div>
						</Link>

					</div>
				</section>
				
			</div>
		)
	}
}

export default Characters