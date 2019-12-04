import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
	    <div>
	    <p>Hello {props.name}</p>
	    </div>
    )
}
    
const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    
    return(
	<div>
	    <h1>Greetings</h1>
	    <Hello name="George" />
	    <Hello name="Daisy" />
	</div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
