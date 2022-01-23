import React from 'react';
import ReactDOM from 'react-dom';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked :
        target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert(`The values are input ${this.state.numberOfGuests}:  checkbox: ${this.state.isGoing}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is Going
                    <input 
                    type="checkbox" 
                    name='isGoing'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}    
                    />
                </label>
                <label>
                    Number of Guests
                    <input
                        type="number"
                        name='numberOfGuests'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>

            <input type="submit" value="Submit" />
            </form>
        )
    }
}


ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)
