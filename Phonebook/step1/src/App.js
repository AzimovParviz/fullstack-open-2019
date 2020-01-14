import React, { useState } from 'react'

const App = (props) => {
    const [ persons, setPersons] = useState(props.persons)
    const [ newName, setNewName ] = useState('add...')
    const [ newNumber, setNewNumber ] = useState('type...')
    console.log(newName);
    const rows = () => persons.map(person =>
				   <li key={person.id}>{person.name} {person.number}</li>)
    const addName = (event) => {
	event.preventDefault()	
	const nameObject = {
	    name: newName,
	    number: newNumber,
	    id: persons.length+1,
	    date: new Date().toISOString()
	}
	
	var found = false;
	for(var i = 0; i < persons.length; i++) {
	    if (persons[i].name == newName) {
		found = true;
		alert('${newName} already exists smh')
		break;
	    }	    
	}
	if(!found) {
	    setPersons(persons.concat(nameObject))
	    setNewName('')
	    setNewNumber('')
	}
    }

    const handleNameChange = (event) => {
	console.log(event.target.value)
	setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
	console.log(event.target.value)
	setNewNumber(event.target.value)
    }
    
    console.log(newName)
    return (
	    <div>
	    <h2>Phonebook</h2>
	    <form onSubmit={addName}>
            <div>
            name: <input value={newName} onChange={handleNameChange}/>
            </div>
	    <div>
	    number: <input value={newNumber} onChange={handleNumberChange} />
	    </div>
            <div>	  
            <button type="submit">add</button>
            </div>
	    </form>
	    <h2>Numbers</h2>
	    {rows()}
	</div>
  )
}

export default App
