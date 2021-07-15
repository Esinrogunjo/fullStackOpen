import React, { useState } from 'react'
import Button from './Button'





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = ()=>{
    return setGood(good+1)
  }

  const neutralHandler = ()=>{
    return setNeutral(neutral+1)
  }

  const badHandler = ()=>{
    return setBad(bad+1)
  }

  const Btns = ()=>{
    return(
      <>
        <Button text = 'good' handler={goodHandler} />
        <Button text = 'Neutral' handler={neutralHandler} />
        <Button text = 'Bad' handler={badHandler} />
      </>
    )
    }

  const Statistics = ({text, value})=>{
      return(<tr><td>{text}</td><td>{value}</td></tr>)

  }


if(good === 0 && bad === 0  && neutral === 0){
  return(
    <div>
    <h3>Give Feedback</h3>
    <Btns />
    <h3>Statistics</h3>
    <p>No Feedback yet!!!</p>
    
  </div>
  )
}
  return (
    <div>
      <h3>Give Feedback</h3>
      <Btns />
      <h3>Statistics</h3>
      <table>
        <tbody>
            <Statistics text = 'Good' value = {good}/>
            <Statistics text = 'Neutral' value = {neutral}/>
            <Statistics text = 'Bad' value = {bad}/>
        </tbody>
      
      </table>
      <p>Average  : {(good+bad+neutral)/3}</p>
      <p>Average Good : {(good*100) / (good+bad+neutral)}</p>
    </div>

  )
}

export default App