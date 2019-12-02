import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {
    return(
	    <button onClick={props.onClick}>{props.text}</button>
    )
}

const Statistics = (props) => {
    return(
	    <div>	    
	    <p>{props.name} {props.num} {props.extra}</p>
	    </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState((good - bad)/(good+neutral+bad))
    const [all, setAll] = useState(good+neutral+bad)
    const [positive, setPositive] = useState((good-bad)/100)
    if(good===0 & bad===0 & neutral===0)
	return (
	    <div>
	  <h1>give feedback</h1>
	  <Button onClick={() => {
	      setGood(good +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      setAll(all +1)
	  }
			  }text={'good'}  />
	  <Button onClick={() => {
	      setNeutral(neutral +1);	
	      setAverage((good-bad)/(good+neutral+bad))
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }text={'neutral'} />
	  <Button onClick={() => {
	      setBad(bad +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }text={'bad'} />
		<h1>statistics</h1>
		<p>no feedback given</p>
		</div>
	)
    else
    return (
	  <div>
	  <h1>give feedback</h1>
	  <Button onClick={() => {
	      setGood(good +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      setAll(all +1)
	  }
			  } text={'good'} />
	  <Button onClick={() => {
	      setNeutral(neutral +1);	
	      setAverage((good-bad)/(good+neutral+bad))
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }text={'neutral'} />
	  <Button onClick={() => {
	      setBad(bad +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }text={'bad'} />
	  <h1>statistics</h1>
	  <Statistics name={'good'} num={good} />
	  <Statistics name={'neutral'} num={neutral} />
	  <Statistics name={'bad'} num={bad} />
	  <Statistics name={'all'} num={all} />
	  <Statistics name={'average'} num={average} />
	  <Statistics name={'positive'} num={positive} extra={'%'}/>
	  
	  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
