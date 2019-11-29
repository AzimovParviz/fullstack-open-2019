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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
	  <Header course={course} />
	  <Content part1={part1} part2={part2} part3={part3} exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3} />
	  <Total e1={exercises1} e2={exercises2}  e3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
