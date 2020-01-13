import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			buttonClass: 'btn',
			buttonText: 'Modal',
			currentClass: 'modal--closed',
			isOpen: true,
		};
	}

	open() {
		this.isOpen = true;
		this.modalOpening();
		setTimeout(() => {
			this.modalOpen();
		}, 320);
	}

	close() {
		this.modalClosing();
		setTimeout(() => {
			this.modalClosed();
			this.isOpen = false;
		}, 320);
	}

	modalOpening() {
		document.body.classList.add('scroll-lock', 'modal--active');
		this.setState({currentClass: 'modal--opening'});
	}
	modalOpen() {
		this.setState({currentClass: 'modal--open'});
	}
	modalClosing() {
		this.setState({currentClass: 'modal--closing'});
	}
	modalClosed() {
		document.body.classList.remove('scroll-lock', 'modal--active');
		this.setState({currentClass: 'modal--closed'});
	}

	render() { return (
		<div className="modal__wrapper">
			<a className="btn" onClick={() => { this.open() }}>{ this.state.buttonText }</a>
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