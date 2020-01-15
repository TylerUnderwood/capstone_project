import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			buttonClass: 'btn',
			buttonText: 'Modal',
			currentClass: 'modal--closed',
			isOpen: false,
		};
	}

	open() {
		this.modalOpening();
		setTimeout(() => {
			this.modalOpen();
		}, 320);
	}

	close() {
		this.modalClosing();
		setTimeout(() => {
			this.modalClosed();
		}, 320);
	}

	modalOpening() {
		document.body.classList.add('scroll-lock', 'modal--active')
		this.setState({
			currentClass: 'modal--opening',
			isOpen: true,
		})
	}
	modalOpen() {
		this.setState({currentClass: 'modal--open'})
	}
	modalClosing() {
		this.setState({currentClass: 'modal--closing'})
	}
	modalClosed() {
		document.body.classList.remove('scroll-lock', 'modal--active')
		this.setState({
			currentClass: 'modal--closed',
			isOpen: false,
		})
	}

	render() { return (
		<div className="modal__wrapper">
			<button className={ this.state.buttonClass } onClick={() => { this.open() }}>
				{ this.state.buttonText }
			</button>
			<div className={['modal', this.state.currentClass].join(' ')}>
				<div className="modal__overlay" onClick={() => { this.close() }}></div>
				<div className="modal__container">
					<button className="modal__close-button" onClick={() => { this.close() }}></button>
					{ this.props.children }
				</div>
			</div>
		</div>
	)}
}

export default Modal;