import React from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefuit">grapefuit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>

                </label>
                <input type="submit" value="submit" />

            </form>
        )
    }

}


ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
)
