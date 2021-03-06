import React, { useState, useEffect } from 'react'
import personsService from './services/persons.js'

/*const rows = (props) => props.props.persons.map(person =>
				   <li key={person.id}>{person.name} {person.number}</li>)*/
const Notification = ({message}) => {
    if (message===null) {
        return null
    }

    return(
        <div className="error">
        {message}
        </div>
    )
}

const Form = (props) => {

    return (
		    
	    <form onSubmit={props.onSubmit}>
            <div>
            name: <input value={props.newName} onChange={props.handleName}/>
            </div>
	    <div>
	    number: <input value={props.newNumber} onChange={props.handleNumber} />
	    </div>
            <div>	  
            <button type="submit">add</button>
            </div>
	    </form>
    )
    
}

const Persons = (props) => {
    //this.props.bind(this)
    return(
	    <div>
	    <h2>Numbers</h2>
	    <ul>
	    {props.props()}
	</ul>
	    </div>
    )
}

const App = (props) => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('add...')
    const [ newNumber, setNewNumber ] = useState('type...')
    const [ errorMessage, setErrorMessage ] = useState('sometin good? happen...')

    const deletePersons = id => {        
        personsService
            .remove(id)
            .then(removedPerson => {
                setPersons(persons.map(person => person.id !== id ? person : removedPerson))
            })
    }       

    useEffect(()=> {
        personsService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
    
    const rows = () => {
	const smt = () => persons.map(person =>
				      <li key={person.id}>
                                        {person.name} {person.number}
                                        <button onClick={()=>deletePersons(person.id)}>delete</button>
                                      </li>)
	return smt
    }

    const addName = (event) => {
	event.preventDefault()	
	const nameObject = {
	    id: persons.length+1,
	    name: newName,
	    number: newNumber,	    
	    date: new Date().toISOString()
	}
	
	var found = false;
	for(var i = 0; i < persons.length; i++) {
	    if (persons[i].name == newName) {
		found = true;
		setErrorMessage('${newName} already exists smh')
		break;
	    }
	    if (persons[i].number === newNumber) {
		found = true;
		setErrorMessage('${newNumber} haz already exists smh')
		break;
	    }
	}
	console.log(persons)
        
	if(!found) {
	    /*setPersons(persons.concat(nameObject))
	    setNewName('')
	    setNewNumber('')*/
            
            personsService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setErrorMessage(`${newName} has been added`)
                })
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

    console.log(props)
    return (
	    <div>
	      <h2>Phonebook</h2>
              <Notification message={errorMessage}/>
	    <Form onSubmit={addName} newName={newName} newNumber={newNumber} handleName = {handleNameChange} handleNumber = {handleNumberChange} />
	    <Persons props={rows()} />
	</div>
  )
}

export default App
