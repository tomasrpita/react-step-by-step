import React from 'react';
import ReactDOM from 'react-dom';


// Renderizado de Múltiples Componentes
// const numbers = [1, 2, 3, 4, 5];
// const listNumbers = numbers.map(number =>{
//     return <li>{number}</li>
// })

// ReactDOM.render(
//     <ul>{listNumbers}</ul>,
//     document.getElementById('root')
// )

// Componente básico de lista
function NumberList(props) {
    const numbers = props.numbers;
    
    return numbers.map(number => {
        return <li key={number.toString()}>{number}</li>
    })
}

const numbers = [1, 2, 3, 4, 5, 6];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)