import React, { useState, useEffect } from 'react'
import Note from './components/Note.js'
import noteService from './services/notes.js'

const App = (props) => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState('a new note...')
    const [ showAll, setShowAll ] = useState(true)
    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
    }
    
    useEffect(()=> {
        noteService.getAll()
            .then(initialNotes => {
            setNotes(initialNotes)
        })
    }, [])
    
    console.log('render', notes.length, 'notes')
    
    const notesToShow = showAll
	  ? notes
	  : notes.filter(note => note.important === true)
    
    const rows = () => notes.map(note =>
			 <Note
			   key={note.id}
			   note={note}
                           toggleImportance={() => toggleImportanceOf(note.id)}
			 />)

    
    const addNote = (event) => {
	event.preventDefault()
        console.log("note length is: ", notes)
	const noteObject = {
	    content: newNote,
	    date: new Date().toISOString(),
	    important: Math.random() > 0.5,
	}
        
        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })
        
    }

    const handleNoteChange = (event) => {
	console.log(event.target.value)
	setNewNote(event.target.value)
    }
    
    return (
	    <div>
	    <h1>Notes</h1>
	    <div>

	    <button onClick={() => setShowAll(!showAll)}>
	    show {showAll ? 'important' : 'all'}
	</button>
	    </div>	    
	    <ul>
	    {rows()}
	</ul>
	    <form onSubmit={addNote}>
	    <input
	value={newNote}
	onChange={handleNoteChange}
	    />
	    <button type="submit">save</button>
	    </form>
	    </div>
	)
    }

export default App
