import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
    return(
	<div>
	    <h1>{course.course.name}</h1>
	</div>
    )
}

const Content = (parts) => {
    let array
    array = parts.parts.map(part => part )
    let ret =''
    for(var i=0;i<array.length;i++)
    {
	ret +=  array[i].name +' '+ array[i].exercises+ '\r\n'
	//ret.write("</br>")
    }
    return(<p>{ret}</p>)
	
}  

const Total = (props) => {
    let array
    array = props.props.map(prop => prop)
    let ret = 0
    for (var i=0;i<array.length;i++)
    {
	ret += array[i].exercises
    }
    return (
	    <div>
	    <p>
	    Number of exercises: {ret}
	    </p>
	    </div>
    )
}


const App = () => {
    const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }


  return (
    <div>
	  <Header course={course} />
	  <Content parts={course.parts}/>
	  <Total props={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
