import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
    return(
	<div>
	    <h1>{course.course}</h1>
	</div>
    )
}

const Content = (text) => {
    return (
	<div>
	<p>
        {text.part1} {text.exercises1}
      </p>
      <p>
        {text.part2} {text.exercises2}
      </p>
      <p>
        {text.part3} {text.exercises3}
      </p>
	    </div>
    )
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
	  <Header course={course} />
	  <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1 = {part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
	  <Total e1={part1.exercises} e2={part2.exercises}  e3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
