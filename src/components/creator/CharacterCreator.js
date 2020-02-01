import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	fetchCharacters,
} from '../../redux/actions'

class CharacterCreator extends Component {

	state = {
		name: '',
		level: 1,
		race: '',
		class: '',
		strength: 8,
		dexterity: 8,
		constitution: 8,
		intelligence: 8,
		wisdom: 8,
		charisma: 8,
	}

	onChange = ( event ) => {
		const target = event.target
		const name = target.name
		let value = undefined

		if ( target.type === 'checkbox' ) {
			value = target.checked
		}
		else if ( target.type === 'radio' ) {
			value = target.id
		}
		else {
			value = target.value
		}

		this.setState({
			[name]: value,
		})
	}

	showForm = ( event ) => {
		event.preventDefault()
		// console.log( event.target )
		alert( JSON.stringify( this.state, null, 4 ) )
	}

	handleSubmit( event ) {
		event.preventDefault();
		// console.log(event)
		// using self helps separate out this from other events
		let self = this.state;
		// On submit of the form, send a POST request with the data to the server.
		fetch('api/characters', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify ({
				character_name: self.name,
				character_level: self.level,
				character_race: self.race,
				character_class: self.class,
				character_strength: self.strength,
				character_dexterity: self.dexterity,
				character_constitution: self.constitution,
				character_intelligence: self.intelligence,
				character_wisdom: self.wisdom,
				character_charisma: self.charisma,
			})
		})
		.then( ( res ) => {
			return res.json()
		})
		.then( ( body ) => {
			console.log(body);
			// window.location.replace("/characters")
			//this.props.history.push('/characters')
		})
	}

	render() {
		return (
			<div className="page-character-creator">
				
				<section className="frame gutter">
					<div className="wrapper">
						<form className="new-character-form" onSubmit={this.handleSubmit}>
							<label className="ncf__item w-75" htmlFor="name">
								Name
								<input 
									className="mar-t-1"
									type="text" 
									name="name" 
									placeholder="name" 
									value={this.state.name} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-25" htmlFor="level">
								Level
								<input 
									className="mar-t-1"
									type="number" 
									min="1" 
									max="20" 
									name="level" 
									placeholder="level" 
									value={this.state.level} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-50" htmlFor="race">
								Race
								<input 
									className="mar-t-1"
									type="text" 
									name="race" 
									placeholder="race" 
									value={this.state.race} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-50" htmlFor="class">
								Class
								<input 
									className="mar-t-1"
									type="text" 
									name="class" 
									placeholder="class" 
									value={this.state.class} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="strength">
								Strength
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30"
									name="strength" 
									placeholder="strength" 
									value={this.state.strength} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="dexterity">
								Dexterity
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30"
									name="dexterity" 
									placeholder="dexterity" 
									value={this.state.dexterity} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="constitution">
								Constitution
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="constitution" 
									placeholder="constitution" 
									value={this.state.constitution} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="intelligence">
								Intelligence
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="intelligence" 
									placeholder="intelligence" 
									value={this.state.intelligence} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="wisdom">
								Wisdom
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="wisdom" 
									placeholder="wisdom" 
									value={this.state.wisdom} 
									onChange={this.onChange} 
								/>
							</label>
							<label className="ncf__item w-16" htmlFor="charisma">
								Charisma
								<input 
									className="mar-t-1" 
									type="number" 
									min="8" 
									max="30" 
									name="charisma" 
									placeholder="charisma" 
									value={this.state.charisma} 
									onChange={this.onChange} 
								/>
							</label>
							<div className="ncf__item">
								<button className="btn" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="wrapper">

						<button className="btn" onClick={ this.props.fetchCharacters }>Fetch</button>

						<table className="w-100 mar-t">
							<thead>
								<tr>
									<td>name</td>
									<td>level</td>
									<td>race</td>
									<td>class</td>
								</tr>
							</thead>

						{this.props.charactersList.map(( character, index ) => (
							<tr key={index}>
								<td>{ character.name }</td>
								<td>{ character.level }</td>
								<td>{ character.race }</td>
								<td>{ character.class }</td>
							</tr>
						))}
						</table>
						

					</div>
				</section>
				
			</div>
		)
	}
}

const mapStateToProps = ( state ) => {
    return {
		charactersList: state.charactersList,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		fetchCharacters: () => dispatch( fetchCharacters() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CharacterCreator)