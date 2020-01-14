import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
      name: 'Moot Mootovich',
      number: '+7800553535',
    date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 2,
      name: 'Tyrell Welling',
      number: '+123456789',
    date: '2019-05-30T18:39:34.091Z',
  }
]

ReactDOM.render(
	<App persons={persons}/>,
    document.getElementById('root')
)
    
    
