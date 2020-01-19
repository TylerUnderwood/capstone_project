import React, { Component } from 'react'


class CharacterOverview extends Component {
	render() {
		return (
			<div className="character-overview">

				<div className="character-sheet-header">
					<h3>Overview</h3>
					<div className="character-name"></div>
					<div className="character-race"></div>
					<div className="character-class"></div>
				</div>
				
				<div className="character-ability">
					<h4>Ability</h4>
				</div>
				<div className="character-saving-throws">
					<h4>Saving Throws</h4>
				</div>
				<div className="character-skills">
					<h4>Skills</h4>
				</div>
				
			</div>
		)
	}
}

export default CharacterOverview