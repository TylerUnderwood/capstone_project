import React, { Component } from 'react'
import CharacterOverview from '../character-sheet/CharacterOverview'


class Character extends Component {

	constructor(props) {
		super(props);
		this.state = {
			overviewActive: true,
			statsActive: false,
			equipmentActive: false,
			spellsActive: false,
			descriptionActive: false,
			notesActive: false,
		};
	}

	closeAll() {
		this.setState({
			overviewActive: false,
			statsActive: false,
			equipmentActive: false,
			spellsActive: false,
			descriptionActive: false,
			notesActive: false,
		})
	}

	// if the sheet is NOT currently on close the others and open that one
	changeSheet( sheet ) {
		switch( sheet ) {
			case 'overview':
				if ( !this.state.overviewActive ) {
					this.closeAll()
					this.setState({
						overviewActive: true
					})
				}
				break;
			case 'stats':
				if ( !this.state.statsActive ) {
					this.closeAll()
					this.setState({
						statsActive: true
					})
				}
				break;
			case 'equipment':
				if ( !this.state.equipmentActive ) {
					this.closeAll()
					this.setState({
						equipmentActive: true
					})
				}
				break;
			case 'spells':
				if ( !this.state.spellsActive ) {
					this.closeAll()
					this.setState({
						spellsActive: true
					})
				}
				break;
			case 'description':
				if ( !this.state.descriptionActive ) {
					this.closeAll()
					this.setState({
						descriptionActive: true
					})
				}
				break;
			case 'notes':
				if ( !this.state.notesActive ) {
					this.closeAll()
					this.setState({
						notesActive: true
					})
				}
				break;
		}
	}

	render() {

		const { 
			overviewActive,
			statsActive,
			equipmentActive,
			spellsActive,
			descriptionActive,
			notesActive,
		} = this.state

		return (
			<div className="entry-character">
	
				<section className="trim gutter">
					<div className="inner">

						<div className="sheets__nav">
							<button 
								className={`sheets__tab 
								${overviewActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'overview' )} 
								title="Overview">
								<span className="geo-text">OVR</span>
							</button>
							<button 
								className={`sheets__tab 
								${statsActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'stats' )} 
								title="Stats">
								<span className="geo-text">STA</span>
							</button>
							<button 
								className={`sheets__tab 
								${equipmentActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'equipment' )} 
								title="Equipment">
								<span className="geo-text">EQU</span>
							</button>
							<button 
								className={`sheets__tab 
								${spellsActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'spells' )} 
								title="Spells">
								<span className="geo-text">SPL</span>
							</button>
							<button 
								className={`sheets__tab 
								${descriptionActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'description' )} 
								title="Description">
								<span className="geo-text">DES</span>
							</button>
							<button 
								className={`sheets__tab 
								${notesActive ? 'sheets__tab--active' : ''}`} 
								onClick={() => this.changeSheet( 'notes' )} 
								title="Notes">
								<span className="geo-text">NTS</span>
							</button>
						</div>
						
						<div className="sheets character-sheets">
							<div 
								className={`sheets__page 
								${overviewActive ? 'sheets__page--active' : ''}`}>
								<CharacterOverview />
							</div>
							<div 
								className={`sheets__page 
								${statsActive ? 'sheets__page--active' : ''} 
								character-stats`}>
								<h3>Stats</h3>
							</div>
							<div 
								className={`sheets__page 
								${equipmentActive ? 'sheets__page--active' : ''} 
								character-eqipment`}>
								<h3>Eqipment</h3>
							</div>
							<div 
								className={`sheets__page 
								${spellsActive ? 'sheets__page--active' : ''} 
								character-spells`}>
								<h3>Spells</h3>
							</div>
							<div 
								className={`sheets__page 
								${descriptionActive ? 'sheets__page--active' : ''} 
								character-description`}>
								<h3>Description</h3>
							</div>
							<div 
								className={`sheets__page 
								${notesActive ? 'sheets__page--active' : ''} 
								character-notes`}>
								<h3>Notes</h3>
							</div>
						</div>
						
					</div>
				</section>
				
			</div>
		)
	}
}

export default Character