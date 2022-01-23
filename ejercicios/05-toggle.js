import React from "react";
import ReactDOM from "react-dom";


class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// this.handleClick = this.handleClick.bind(this);
		// Cómo funciona esto?
	}

	// handleClick() {
	// 	this.setState(prevState => ({
	// 		isToggleOn: !prevState.isToggleOn
	// 	}));
	// }

	handleClick = () => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render( ) {
		return (
			<button onClick={this.handleClick}>
			{/* // <button onClick={() => this.handleClick()}> */}
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}
