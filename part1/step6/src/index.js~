import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
    return(
	<div>
	    <h1>{course.course}</h1>
	</div>
    )
}

const Content = (parts) => {
    let array
    array = parts.parts.map(part => part )
    let ret = '\n'
    for(var i=0;i<array.length;i++)
    {
	ret +=  array[i].name +' '+ array[i].exercises+ '\n'
    }
    return(<p>{ret}</p>)
	
}  

const Total = (props) => {
    return (
	    <div>
	    <p>
	    Number of exercises: {props.e1 + props.e2 + props.e3}
	    </p>
	    </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
	{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    } ]


  return (
    <div>
	  <Header course={course} />
	  <Content parts={parts}/>
	  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
