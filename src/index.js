import React from "react";
import ReactDOM from "react-dom";



const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

function BoilingVeredict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {temperature: ''}
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(e) {
		this.setState({temperature: e.target.value})

	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.props.scale;

		return (
			<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}</legend>
			<input
			type="number"
			value={temperature}
			onChange={this.handleChange}
			/>
			</fieldset>
		)


	}


}

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {temperature: 20};
		// this.handleInputChange = this.handleInputChange.bind(this);

	}



	render() {
		// const temperature = this.state.temperature;

		return (
			<div>
				<TemperatureInput scale={'c'}/>
				<TemperatureInput scale={'f'}/>
				{/* <input
					type="number"
					value={temperature}
					onChange={this.handleInputChange}
					/> */}
				{/* <BoilingVeredict celsius={parseFloat(temperature)}/> */}
			</div>
		)
	}
}


ReactDOM.render(
	<Calculator/>,
	document.getElementById('root')
)
