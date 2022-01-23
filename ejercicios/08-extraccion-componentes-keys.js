import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {

    const numbers = props.numbers;

    const listNumbers = numbers.map(number => {
        return <ListItem key={number.toString()} value={number} />

    })

    return (
        <div>
            <ul>
                {listNumbers}
            </ul>
        </div>
    )
}

const numbers = [1, 3, 4, 7, 8]
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
)