import React, {useState} from "react"

const App = ()=>{
  const [counter, setCounter] = useState(0)
  const incr = ()=>setCounter(counter+1)
const decr = ()=>setCounter(0)

const Display = ({counter})=><div>{counter}</div>
  


const Button =({handleClick,text})=>{
return(
  <button onClick={handleClick}>{text}</button>
)
}

  return(
    <div>
      <Display counter= {counter}/> 
      <Button handleClick={incr} text = 'Increase' />
      <Button handleClick={decr} text='Reset' /> 
    </div>
  )
}

export default App