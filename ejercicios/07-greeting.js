import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGtreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGtreeting />;
}

ReactDOM.render(
    // Intentar cambiando isLoggedIn=(true):
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
);