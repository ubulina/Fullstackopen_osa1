import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Kaikki komponentit on määritelty erillisinä

const Statistics = (props) => {

  console.log(props)

  const { good, neutral, bad, sum } = props

  const allFeedback = good + neutral + bad


  if(allFeedback === 0){

    return (

      <div>
        <p>No feedback given</p>
      </div>
    )

  }

  return (
    <div>

      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={sum / allFeedback} />
          <StatisticLine text="positive" value={(good / allFeedback) * 100 + ' %'} />
        </tbody> 
      </table>  

    </div>
  )

}

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>

  )
}

const StatisticLine = (props) => {

  console.log(props)

  
  return (
    
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    

      )
}


const App = () => {
  //napit tallennettu omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState (0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGoodFeedback = () => {
    setSum(sum + 1)
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setSum(sum + 0)
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setSum(sum - 1)
    setBad(bad + 1)
  }

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodFeedback} text='good' />
      <Button handleClick={handleNeutralFeedback} text='neutral' />
      <Button handleClick={handleBadFeedback} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />      
    </div>


  )
}

ReactDOM.render(<App />, document.getElementById('root'))



