import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    return(
	    <div>	    
	    <p>{props.name} {props.num} {props.extra}</p>
	    </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    
const Statistics = () => {
    return(
	    <div>
	    <h1>statistics</h1>
	    <p>good {good}</p>
	    <p>neutral {neutral}</p>
	    <p>bad {bad}</p>
	    <p>all {all}</p>
	    <p>average {average}</p>
	    <p>positive {positive} %</p>
	    
	    
	    </div>
    )
}
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    const [average, setAverage] = useState((good - bad)/(good+neutral+bad))
    const [all, setAll] = useState(good+neutral+bad)
    const [positive, setPositive] = useState((good-bad)/100)
    
  return (
	  <div>
	  <h1>give feedback</h1>
	  <button onClick={() => {
	      setGood(good +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      setAll(all +1)
	  }
			  }>good</button>
	  <button onClick={() => {
	      setNeutral(neutral +1);
	      //console.log((average+1)/(good+neutral+bad));
	      setAverage((good-bad)/(good+neutral+bad))
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }>neutral</button>
	  <button onClick={() => {
	      setBad(bad +1);
	      setAverage((good-bad)/(good+neutral+bad));
	      setPositive((good-bad)/0.1)
	      	      setAll(all +1)
	  }
			  }>bad</button>

	  <Statistics  />
	  
	  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
