import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Moot Mootovich',
    date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 2,
    name: 'Tyrell Welling',
    date: '2019-05-30T18:39:34.091Z',
  }
]

ReactDOM.render(
	<App persons={persons}/>,
    document.getElementById('root')
)
    
    
