import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Characters extends Component {

	state = {
		characterList: [
			{
				name: 'Krunk',
				race: 'Orc',
				class: 'Bard',
				level: 12,
				bannerURL: 'https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579926596/2R3osOw_yzh3si.jpg',
				pictureURL: 'https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579924603/lpidkukq0al11_j36a2d.png',
			},
			{
				name: 'Methelazar',
				race: 'Tiefling',
				class: 'Wizard',
				level: 15,
				bannerURL: 'https://res.cloudinary.com/cyborgspaceviking/image/upload/v1579926582/green_fields_by_jjcanvas_d88fysk-350t_gmm1o6.jpg',
				pictureURL: 'https://res.cloudinary.com/cyborgspaceviking/image/upload/v1580076923/Thiefling_ir8enz.png',
			},
		],
	}

	render() {
		return (
			<div className="entry-character">
	
				<section className="frame gutter">
					<div className="wrapper">

						<div className="cards-row">
						
							{this.state.characterList.map(( character, index ) => (
							<Link className="character-card cards__item" to="/characters/character" key={index}>
								<div 
									className="character-card__banner bg-img"
									style={{ backgroundImage: `url('${ character.bannerURL }')` }}>
								</div>
								<div 
									className="character-card__image bg-img"
									style={{ backgroundImage: `url('${ character.pictureURL }')` }}>
								</div>
								<div className="character-card__content">
									<div className="overflow-hidden">
										<h4>{ character.name }</h4>
										<div className="inline-list inline-list--pipline geo-text">
											<span className="inline-list__item">{ character.race }</span>
											<span className="inline-list__item">{ character.class }</span>
										</div>
									</div>
									<div className="text-right mar-t-3 w-100">
										<span className="character-card__level">
											<span className="level__text">lvl</span>
											<span className="level__number">{ character.level }</span>
										</span>
									</div>
								</div>
							</Link>
							))}

							<Link className="add-new-character cards__item" to="/character-creator">
								<div className="add-new-character__icon"></div>
							</Link>

						</div>

					</div>
				</section>
				
			</div>
		)
	}
}

export default Characters