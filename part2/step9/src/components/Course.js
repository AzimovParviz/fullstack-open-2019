import React from 'react'

const Header = (course) => {
    console.log('Header is here right??')
    return(
	<div>
	    <h1>{course.course.name}</h1>
	</div>
    )
}

const Content = (course) => {
    let array
    array = course.course.parts.map(part => part )
    let ret =''
    for(var i=0;i<array.length;i++)
    {
	ret +=  array[i].name +' '+ array[i].exercises+ '\r\n'
	//ret.write("</br>")
    }
    return(<p>{ret}</p>)
	
}  

const Total = (course) => {
    let array
    array = course.course.parts.map(prop => prop)
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

const Course = (course) => {
     let array
    array = course.course.map(prop => prop)
    //console.log(array)
    return (
	    <div>
	    <Header course={array[0]} />
	    <Content course={array[0]}/>
	    <Total course={array[0]}/>
	    <Header course={array[1]} />
	    <Content course={array[1]}/>
	    <Total course={array[1]}/>
	    </div>
    )
}

export default Course
