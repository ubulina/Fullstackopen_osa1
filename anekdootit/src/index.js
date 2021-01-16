import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {

  console.log(props)

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

}

const Anecdote = (props) => {

  console.log(props)

  return (
    <div>
      {anecdotes[props.value]}
    </div>


  )


}


const App = (props) => {

  //palauttaa numeron, joka on välillä 0 - taulukon suurin indeksi
  const getRandomInt = () => {

    return Math.floor(Math.random() * Math.floor(anecdotes.length))
  
  }

  const[selected, setSelected] = useState(getRandomInt())
  const[points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))


  //asettaa selected-tilan arvoksi juuri arvotun anekdoottitaulukon indeksin

  const handleNext = () => {
    setSelected(getRandomInt())

  }

  const vote = () => {

    console.log(points) //debug

    const copy = [...points]
    // kasvatetaan taulukon paikan x arvoa yhdellä ja laitetaan se uudeksi tilan arvoksi
    copy[selected] +=  1
    
    setPoints(copy)

    console.log(copy)//debug

    console.log(points)//debug
 

  }

  
   //määritellään toiminto, joka etsii taulukosta suurimman arvon sisältävän indeksin

  const maximum = Math.max(...points)

  console.log(maximum)

  const index = points.indexOf(maximum)

  
  return (

    <div>  
      <h1>Anecdote of the day</h1>    
      <Anecdote value={selected} />
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleNext} text='next anecdote' />   
      <Button handleClick={vote} text='vote' />  
      <h1>Anecdote with most votes</h1>
      <Anecdote value={index} /> 
      <p>has {points[index]} votes</p> 
       
    </div>
  )
   

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))


