import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';
import CharacterAbilities from '../character-sheet/CharacterAbilities';
import CharacterSkillsList from '../character-sheet/CharacterSkillsList';


class CharacterOverview extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Krunk',
			race: 'Orc',
			class: 'Bard',
		};
	}

	render() {
		return (
			<div className="cs-overview sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Overview" />
				</div>
				
				<div className="cs__abilities sheet-box">
					<h4 className="cs__box-label">Ability</h4>
					<CharacterAbilities />
				</div>

				<div className="cs__saving-throws sheet-box">
					<h4 className="cs__box-label">Saving Throws</h4>
				</div>

				<div className="cs__skills sheet-box">
					<h4 className="cs__box-label">Skills</h4>
					<CharacterSkillsList />
				</div>

				<div className="cs__attack sheet-box">
					<h4 className="cs__box-label">Attack</h4>
				</div>

				<div className="cs__spell-slots sheet-box">
					<h4 className="cs__box-label">Spell Slots</h4>
				</div>
				
			</div>
		)
	}
}

export default CharacterOverview