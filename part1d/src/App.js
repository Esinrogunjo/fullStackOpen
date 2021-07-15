import React,{useState} from "react";



const History = (props)=>{
  if(props.allClick.length <=0){
    return(
      <div>
        Oops! You have no click yet
      </div>
    )
  }
  return(
    <div>
      Yes!  your clicks : {props.allClick.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text})=>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
  
}


function App() {
  //const [clicks, setClicks] = useState({left:0, right:0})

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [value, setValue] = useState(10)

  const handleLeftClick = ()=>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClicks = ()=>{
  setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  const hello = (who)=>{
   return ()=>console.log('hello', who);
   
  }
  return (
    <div>
     {left}
     <Button handleClick={handleLeftClick} text = 'Left'/ >
     
     <Button handleClick={handleRightClicks} text='Right'/>
     {right}

      <History allClick={allClicks} />
      <div>
        {value}
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
       </div>  
     

      
    </div>
  );
}

export default App;
