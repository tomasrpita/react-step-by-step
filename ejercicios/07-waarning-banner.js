import React from 'react';
import ReactDOM from 'react-dom';

// Evitar que el componente se renderice
// En casos excepcionales, es posible que desees que un 
// componente se oculte a sí mismo aunque haya sido 
// renderizado por otro componente. Para hacer esto, 
// devuelve null en lugar del resultado de renderizado.
function WarningBanner(props) {
    const warn = props.warn;
    if (!warn) {
        return null;
    }
    return (
        <div className='warning'>
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleTogglecClick = this.handleTogglecClick.bind(this);
    }

    handleTogglecClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleTogglecClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)